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
      };
      users: {
        Row: {
          avatar_url: string;
          created_at: string | null;
          email: string;
          id: string;
          name: string;
        };
        Insert: {
          avatar_url?: string;
          created_at?: string | null;
          email: string;
          id: string;
          name: string;
        };
        Update: {
          avatar_url?: string;
          created_at?: string | null;
          email?: string;
          id?: string;
          name?: string;
        };
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
