export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          bg_img_url: string | null;
          id: string;
          name: string;
          path: string;
          tags: string[];
        };
        Insert: {
          bg_img_url?: string | null;
          id?: string;
          name: string;
          path: string;
          tags: string[];
        };
        Update: {
          bg_img_url?: string | null;
          id?: string;
          name?: string;
          path?: string;
          tags?: string[];
        };
        Relationships: [];
      };
      gold_offers: {
        Row: {
          created_at: string | null;
          faction: string;
          game_id: string;
          id: number;
          minimum_amount: number | null;
          price: number;
          region: string;
          server: string;
          stock: number;
          unit: number | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          faction: string;
          game_id: string;
          id?: number;
          minimum_amount?: number | null;
          price: number;
          region: string;
          server: string;
          stock: number;
          unit?: number | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          faction?: string;
          game_id?: string;
          id?: number;
          minimum_amount?: number | null;
          price?: number;
          region?: string;
          server?: string;
          stock?: number;
          unit?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'gold_offers_game_id_fkey';
            columns: ['game_id'];
            referencedRelation: 'games';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'gold_offers_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      orders: {
        Row: {
          created_at: string | null;
          id: string;
          quantity: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          quantity?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          quantity?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          added_at: string;
          details: string;
          game_id: string;
          id: string;
          image_url: string | null;
          name: string;
          path: string;
          price: number;
          sale_price: number | null;
          tags: string[];
          updated_at: string;
        };
        Insert: {
          added_at?: string;
          details?: string;
          game_id: string;
          id?: string;
          image_url?: string | null;
          name?: string;
          path: string;
          price?: number;
          sale_price?: number | null;
          tags?: string[];
          updated_at?: string;
        };
        Update: {
          added_at?: string;
          details?: string;
          game_id?: string;
          id?: string;
          image_url?: string | null;
          name?: string;
          path?: string;
          price?: number;
          sale_price?: number | null;
          tags?: string[];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'products_game_id_fkey';
            columns: ['game_id'];
            referencedRelation: 'games';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string;
          email: string;
          id: string;
          name: string;
        };
        Insert: {
          avatar_url?: string;
          email: string;
          id: string;
          name: string;
        };
        Update: {
          avatar_url?: string;
          email?: string;
          id?: string;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
