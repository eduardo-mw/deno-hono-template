export interface Player {
  name: string;
  displayName: string;
  iconUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Match {
  player1Id: string;
  player2Id: string;
  player1Score: number;
  player2Score: number;
}
