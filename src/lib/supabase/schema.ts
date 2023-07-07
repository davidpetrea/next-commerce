export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      cart_items_auth: {
        Row: {
          cart_item_id: string;
          created_at: string | null;
          gold_offer_id: string | null;
          meta: Json | null;
          product_id: string | null;
          quantity: number | null;
          seller_id: string | null;
          total_price: number | null;
          user_id: string;
        };
        Insert: {
          cart_item_id?: string;
          created_at?: string | null;
          gold_offer_id?: string | null;
          meta?: Json | null;
          product_id?: string | null;
          quantity?: number | null;
          seller_id?: string | null;
          total_price?: number | null;
          user_id: string;
        };
        Update: {
          cart_item_id?: string;
          created_at?: string | null;
          gold_offer_id?: string | null;
          meta?: Json | null;
          product_id?: string | null;
          quantity?: number | null;
          seller_id?: string | null;
          total_price?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "cart_items_auth_gold_offer_id_fkey";
            columns: ["gold_offer_id"];
            referencedRelation: "gold_offers";
            referencedColumns: ["offer_id"];
          },
          {
            foreignKeyName: "cart_items_auth_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "cart_items_auth_seller_id_fkey";
            columns: ["seller_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "cart_items_auth_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      factions: {
        Row: {
          name: string;
        };
        Insert: {
          name: string;
        };
        Update: {
          name?: string;
        };
        Relationships: [];
      };
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
          minimum_amount: number | null;
          offer_id: string;
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
          minimum_amount?: number | null;
          offer_id?: string;
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
          minimum_amount?: number | null;
          offer_id?: string;
          price?: number;
          region?: string;
          server?: string;
          stock?: number;
          unit?: number | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "gold_offers_faction_fkey";
            columns: ["faction"];
            referencedRelation: "factions";
            referencedColumns: ["name"];
          },
          {
            foreignKeyName: "gold_offers_game_id_fkey";
            columns: ["game_id"];
            referencedRelation: "games";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "gold_offers_region_fkey";
            columns: ["region"];
            referencedRelation: "regions";
            referencedColumns: ["name"];
          },
          {
            foreignKeyName: "gold_offers_server_fkey";
            columns: ["server"];
            referencedRelation: "servers";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "gold_offers_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
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
            foreignKeyName: "products_game_id_fkey";
            columns: ["game_id"];
            referencedRelation: "games";
            referencedColumns: ["id"];
          }
        ];
      };
      regions: {
        Row: {
          name: string;
        };
        Insert: {
          name: string;
        };
        Update: {
          name?: string;
        };
        Relationships: [];
      };
      servers: {
        Row: {
          game_id: string;
          id: string;
          name: string;
          region: string;
        };
        Insert: {
          game_id: string;
          id?: string;
          name: string;
          region: string;
        };
        Update: {
          game_id?: string;
          id?: string;
          name?: string;
          region?: string;
        };
        Relationships: [
          {
            foreignKeyName: "servers_game_id_fkey";
            columns: ["game_id"];
            referencedRelation: "games";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "servers_region_fkey";
            columns: ["region"];
            referencedRelation: "regions";
            referencedColumns: ["name"];
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
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
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
