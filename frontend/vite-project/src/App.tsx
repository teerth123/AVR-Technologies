import Dashboard from "./app/dashboard/OEM/dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import SignUpPage from "./clerk/Signin"
import SignInPage from "./clerk/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in/*" element={<SignInPage />} /> {/* <-- Note the `/*` */}
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App
