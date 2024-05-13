interface Author {
  name: string;
  lastname: string;
}

interface Price {
  amount: number;
  decimals: number;
  currency: string;
}

interface ItemResponse {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  currency_id: string;
  sold_quantity: number;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  thumbnail?: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  categories?: string[];
  category_id?: string;
  currency_id?: string;
}

interface Category {
  name: string;
}

interface CategoryFilter {
  id: string;
  values: {
    path_from_root: Category[];
  }[];
}

interface ItemSearchResponse {
  author: Author;
  categories: string[];
  items: Item[];
}

interface ItemDetailResponse {
  author: Author;
  item: Item;
}

interface BreadCrumbsProps {
  categories: string[];
}
