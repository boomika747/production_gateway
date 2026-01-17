import axios from "axios";
import Webhook from "../models/webhook.model.js";

export const triggerWebhooks = async (merchantId, event, payload) => {
  const webhooks = await Webhook.findAll({
    where: { merchantId, event }
  });

  for (const hook of webhooks) {
    try {
      await axios.post(hook.url, payload);
      console.log(`🔔 Webhook sent → ${hook.url}`);
    } catch (err) {
      console.error(`❌ Webhook failed → ${hook.url}`);
    }
  }
};
