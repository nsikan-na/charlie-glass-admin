export type TUser = {
  accessToken: string;
  expirationMs: number;
  roleId: number;
  userBusiness: string;
  userId: number;
  userInitials: string;
  userName: string;
};

export type TReportData = { [key: string]: any }[];

export type TReportParams = { [key: string]: any };
