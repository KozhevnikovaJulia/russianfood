// import { Session } from "next-auth";
// import { create } from "zustand";

// type SessionStatus = "authenticated" | "unauthenticated" | "loading";

//  type AuthStateType = {
//   isAuth: boolean;
//   status: SessionStatus;
//   session: Session | null;
//   setAuthState: (status: SessionStatus, session: Session | null) => void;
// }

// export const useAuthStore = create<AuthStateType>((set) => ({
//   isAuth: false,
//   status: "loading",
//   session: null,
//   setAuthState: (status: SessionStatus, session: Session | null) =>
//     set({
//       isAuth: status === "authenticated",
//       status,
//       session
//     })
// }));
