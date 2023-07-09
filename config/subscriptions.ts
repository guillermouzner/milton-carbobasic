import {SubscriptionPlan} from "types";
// import { env } from "@/env.mjs"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description: "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
  mercadopagoPriceId: "",
};

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited posts.",
  mercadopagoPriceId: "",
};
