import { FieldValues } from "react-hook-form";
import { apiServerSide } from "./api";
import { iAnnouncement } from "./apiAnnouncement";

export interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role: "BUYER" | "SELLER";
  created_at: Date;
  address: {
    id: string;
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  };
  announcement: Array<iAnnouncement>;
}

export interface ipostUser {
  token: string;
}

export async function postUser(data: FieldValues): Promise<ipostUser> {
  const { data: response } = await apiServerSide.post<ipostUser>("login", data);
  return response;
}

export async function postUserCreate(data: FieldValues): Promise<iUser> {
  const { data: response } = await apiServerSide.post<iUser>("users", data);
  return response;
}

export async function getUserProfile(token: string): Promise<iUser> {
  apiServerSide.defaults.headers.authorization = `Bearer ${token}`;
  const { data: response } = await apiServerSide.get<iUser>("users/profile");
  return response;
}