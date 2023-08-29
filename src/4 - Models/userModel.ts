




export type UserModel = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  password: string;
  repassword: string;
  created_at?: Date;
};

export type CredentialsModel = {
  email: string;
  password: string;
}
