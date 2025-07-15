import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FixKaroWaitlist() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    appliance: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be replaced with backend call
    console.log("Form submitted", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl p-8 rounded-2xl shadow-xl">
        <CardContent>
          {!submitted ? (
            <>
              <motion.h1
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Be the First to Experience Fix Karo
              </motion.h1>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="appliance"
                  placeholder="Type of Appliance (Optional)"
                  value={form.appliance}
                  onChange={handleChange}
                />
                <Button type="submit" className="mt-2">
                  Join Waitlist
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">
                You're on the list!
              </h2>
              <p className="mb-2">Thanks for signing up for early access.</p>
              <p>We'll notify you when Fix Karo launches in your city.</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
