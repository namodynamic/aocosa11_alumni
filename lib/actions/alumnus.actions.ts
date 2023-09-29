"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";
import User from "../models/alumnus.model";
import { connectToDB } from "../database";

export async function fetchAlumnus(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId })
    //   .populate({
    //   path: "alumni",
    //   model: User,
    // });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}



interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
  birthday: Date;
  location: string;
  occupation: string;
}

export async function updateAlumnus({
  userId,
  bio,
  name,
  path,
  username,
  image,
  birthday,
  location,
  occupation,
}: Params): Promise<void> {
  try {
    connectToDB();

    // Construct the update object with the fields you want to update
    const updateObject: any = {
      username: username.toLowerCase(),
      name,
      bio,
      image,
      birthday,
      onboarded: true,
    };

    // Add the birthday and location fields to the update object if provided
    if (birthday) {
      updateObject.birthday = typeof birthday === 'string' ? new Date(birthday) : birthday;
    }

    if (location) {
      updateObject.location = location;
    }
    if (occupation) {
      updateObject.occupation = occupation;
    }

    // Use findOneAndUpdate to update the user document
    await User.findOneAndUpdate({ id: userId }, updateObject, { upsert: true });

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}


export async function fetchAlumni({
  userId,
  searchString = "",
  pageNumber = 1,
  pageSize = 23,
  sortBy = "desc",
}: {
  userId: string;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
}) {
  try {
    connectToDB();

    // Calculate the number of users to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    // Create a case-insensitive regular expression for the provided search string.
    const regex = new RegExp(searchString, "i");

    // Create an initial query object to filter users.
    const query: FilterQuery<typeof User> = {
      id: { $ne: userId }, // Exclude the current user from the results.
    };

    // If the search string is not empty, add the $or operator to match either username or name fields.
    if (searchString.trim() !== "") {
      query.$or = [
        { username: { $regex: regex } },
        { name: { $regex: regex } },
      ];
    }

    // Define the sort options for the fetched users based on createdAt field and provided sort order.
    const sortOptions = { createdAt: sortBy };

    const usersQuery = User.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    // Count the total number of users that match the search criteria (without pagination).
    const totalUsersCount = await User.countDocuments(query);

    const users = await usersQuery.exec();

    // Check if there are more users beyond the current page.
    const isNext = totalUsersCount > skipAmount + users.length;

    return { users, isNext, totalUsersCount };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
