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
          id: string;
          name: string;
          path: string;
          tags: string[];
        };
        Insert: {
          id?: string;
          name: string;
          path: string;
          tags: string[];
        };
        Update: {
          id?: string;
          name?: string;
          path?: string;
          tags?: string[];
        };
        Relationships: [];
      };
      orders: {
        Row: {
          created_at: string | null;
          id: string;
          product_id: string;
          quantity: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          product_id: string;
          quantity?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          product_id?: string;
          quantity?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'orders_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'products';
            referencedColumns: ['id'];
          }
        ];
      };
      products: {
        Row: {
          added_at: string;
          category: string;
          details: string;
          id: string;
          name: string;
          price: number;
          updated_at: string | null;
        };
        Insert: {
          added_at?: string;
          category?: string;
          details?: string;
          id: string;
          name?: string;
          price?: number;
          updated_at?: string | null;
        };
        Update: {
          added_at?: string;
          category?: string;
          details?: string;
          id?: string;
          name?: string;
          price?: number;
          updated_at?: string | null;
        };
        Relationships: [];
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
