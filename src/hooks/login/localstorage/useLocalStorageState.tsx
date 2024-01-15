import { useEffect, useState } from "react";

export default function useSetLocalStorage(state: any, key: any) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
}
