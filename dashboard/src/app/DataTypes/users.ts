export interface User {
    _id?: string; // Optional because Mongoose will add this field automatically
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt?: Date; // Optional to include timestamps
    updatedAt?: Date; // Optional to include timestamps
  }