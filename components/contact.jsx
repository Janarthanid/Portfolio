"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    const form = e.target
    const data = new FormData(form)

    const response = await fetch("https://formspree.io/f/xlgwqokd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      setStatus("success")
      form.reset()
      setTimeout(() => setStatus(null), 4000)
    } else {
      setStatus("error")
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Contact Information
              </h3>

              <div className="flex flex-col gap-4">

                <a
                  href="mailto:janarthani39@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">janarthani39@gmail.com</span>
                </a>

                <a
                  href="tel:+919943282058"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">+91 9943282058</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-6 shadow-sm border border-border flex flex-col gap-4"
          >

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="px-4 py-2.5 rounded-lg border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">
                Failed to send message. Try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  )
}