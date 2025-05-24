import { useState } from "react";
import { Logo } from "./landing_page";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader2, LogIn } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import * as EmailValidator from "email-validator";

function WaitListPage() {
  const [email, setEmail] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <div className=" p-4   bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <Logo />
      <section className="flex mt-5 h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Instantly Organize and Save Your
          <span className="text-primary">
            {" "}
            Chrome Tabs <br /> with One Click
          </span>
        </h1>
        <h4 className="mt-3 text-muted-foreground font-medium text-center">
          Join hundreds of users waiting for the ultimate Chrome extension to
          <br></br>
          automatically organize your tabs into smart groups, save sessions, and
          boost your productivity.
        </h4>
        <div className="mt-6 w-fit p-4 bg-white rounded-lg shadow-xl">
          <section className="flex gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              disabled={buttonLoading}
              className="cursor-pointer"
              onClick={async () => {
                setButtonLoading(true);
                if (email.trim() === "") {
                  toast.error("Please enter a valid email address.", {
                    iconTheme: {
                      primary: "#dc2626",
                      secondary: "#ffffff",
                    },
                    style: {
                      fontWeight: "500",
                    },
                  });
                } else {
                  if (EmailValidator.validate(email)) {
                    try {
                      const response = await axios.post(
                        "https://tabflow-api.fly.dev/add_to_waitlist",
                        { email }
                      );
                      if (response.status === 200) {
                        toast.success("You have joined the waitlist!", {
                          iconTheme: {
                            primary: "#16a34a",
                            secondary: "#ffffff",
                          },
                          style: {
                            fontWeight: "500",
                          },
                        });
                        setEmail("");
                      } else if (response.status == 400) {
                        toast.error(response.data.error, {
                          iconTheme: {
                            primary: "#dc2626",
                            secondary: "#ffffff",
                          },
                          style: {
                            fontWeight: "500",
                          },
                        });
                      } else {
                        toast.error("Failed to join the waitlist.", {
                          iconTheme: {
                            primary: "#dc2626",
                            secondary: "#ffffff",
                          },
                          style: {
                            fontWeight: "500",
                          },
                        });
                      }
                    } catch (error: unknown) {
                      if (axios.isAxiosError(error)) {
                        toast.error(error.response!.data.error, {
                          iconTheme: {
                            primary: "#dc2626",
                            secondary: "#ffffff",
                          },
                          style: {
                            fontWeight: "500",
                          },
                        });
                      } else {
                        console.error("Error joining waitlist:", error);
                      }
                    }
                  } else {
                    toast.error("Please enter a valid email address.", {
                      iconTheme: {
                        primary: "#dc2626",
                        secondary: "#ffffff",
                      },
                      style: {
                        fontWeight: "500",
                      },
                    });
                  }
                }
                setButtonLoading(false);
              }}
            >
              {buttonLoading ? <Loader2 className="animate-spin" /> : <LogIn />}
              Join The Waitlist
            </Button>

            {/* FAQ Section */}
          </section>
        </div>
        <div className="mt-16 ">
          <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 border flex flex-col">
              <span className="flex items-center gap-2 font-medium text-primary">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <circle cx="9" cy="9" r="8" />
                  <path d="M9 13v-2" />
                  <path d="M9 7h.01" />
                </svg>
                When will the product launch?
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                We&apos;re aiming for release it in end of May 2025. Sign up to
                be the first to know!
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border flex flex-col">
              <span className="flex items-center gap-2 font-medium text-primary">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <circle cx="9" cy="9" r="8" />
                  <path d="M9 13v-2" />
                  <path d="M9 7h.01" />
                </svg>
                Is my email safe?
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Absolutely. We&apos;ll never share your information or send
                spam.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WaitListPage;
