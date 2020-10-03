export class UserModel {
  constructor(
    public _id: string,
    public carnetCui: string,
    public name: string,
    public lastname: string,
    public password: string
  ) {}
}
