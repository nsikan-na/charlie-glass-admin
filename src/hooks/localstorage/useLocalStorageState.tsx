import { useEffect, useState } from "react";

export default function useSetLocalStorage(user: any, key: any) {
  try {
    localStorage.setItem(key, JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
}
