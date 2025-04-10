"use client";

// このインポートはESLintエラーになるはず（formatDateは@packageとして扱われるため）
import { formatDate, formatCurrency } from "../utils/helpers";

export default function TestImport() {
  const today = new Date();
  const formattedDate = formatDate(today);
  const formattedPrice = formatCurrency(1000);

  return (
    <div>
      <h1>インポートテスト</h1>
      <p>今日の日付: {formattedDate}</p>
      <p>金額: {formattedPrice}</p>
    </div>
  );
}
