export interface Terrain {
    id?: number;
    nom: string;
    type: string;
    emplacement?: string;
    capaciteSpectateurs?: number;
    eclairage?: boolean;
    prixLocation?: number;
  }