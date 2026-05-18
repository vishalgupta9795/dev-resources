export class OAuthToken {
    tokenDetailsId: number = 0;
  authDetailsId: number = 0;
  accessToken: string | null = null;
  expireInDt: Date | null = null;
  refershToken: string | null = null;
  tokenId: string | null = null;
  scope: string | null = null;
  tokenType: string | null = null;
  createDt: Date | null = null;
  updateDt: Date | null = null;
  materAuthTypeId: number = 0;
}
