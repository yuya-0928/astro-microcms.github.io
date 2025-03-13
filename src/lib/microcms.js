import { createClient } from 'microcms-js-sdk';

// MicroCMSクライアントの初期化
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// お知らせ記事一覧の取得
export async function getAllNews(queries = {}) {
  const response = await client.get({
    endpoint: 'news',
    queries,
  });
  
  console.log("response.contents", response.contents);
  return response.contents;
}

// 特定のお知らせ記事を取得
export async function getNewsById(id) {
  const response = await client.get({
    endpoint: 'news',
    contentId: id,
  });
  
  return response;
}

// カテゴリ一覧の取得
export async function getAllCategories() {
  const response = await client.get({
    endpoint: 'category',
  });
  
  return response.contents;
}

// カテゴリIDでお知らせをフィルター
export async function getNewsByCategory(categoryId) {
  return getAllNews({
    filters: `category[equals]${categoryId}`,
  });
}

// ブログ記事一覧の取得
export async function getAllPosts() {
  const response = await client.get({
    endpoint: 'blogs', // MicroCMSで設定したAPIエンドポイント名
  });
  
  return response.contents;
}

// 特定の記事を取得
export async function getPostById(id) {
  const response = await client.get({
    endpoint: 'blogs',
    contentId: id,
  });
  
  return response;
} 