"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "./Button";

/* ═══════════════════════════════════════════════════════════════
   ★★★ FORM SETUP — sirf ek baar, 2 minute ★★★
   Enquiries tumhare EMAIL pe aayengi — iske liye Formspree use ho raha hai:
   1. https://formspree.io pe free account banao (50 enquiries/month free)
   2. "New Form" banao → tumhe ek Form ID milega, jaise: xayzabcd
   3. Neeche YOUR_FORM_ID_HERE ki jagah woh ID paste kar do
   4. Site pe pehli enquiry aane pe Formspree tumhe ek email bhejega —
      usme "Confirm" dabana ZAROORI hai, tabhi aage ke emails aayenge
   ═══════════════════════════════════════════════════════════════ */
const FORMSPREE_FORM_ID = "mnpnboop";

/* Service pills — user multiple select kar sakta hai. "Others" isliye hai
   taaki list me na ho woh requirement bhi capture ho jaye — call pe pata
   kar lena kya chahiye. */
const SERVICES = [
  "Website Designing",
  "SEO",
  "GEO",
  "AEO",
  "UI & UX",
  "Rebrand / Rebuild",
  "Others",
];

const LeadFormContext = createContext(null);

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx)
    throw new Error("useLeadForm must be used inside <LeadFormProvider>");
  return ctx;
}

export function LeadFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState(null);

  /* openLeadForm(service?) — optional preset: jis service card pe click
     hua ho, woh pill pehle se selected khulegi */
  const openLeadForm = useCallback((service) => {
    /* sirf string preset bano — generic onClick={openLeadForm} se aaya
       click event yahan service na ban jaye */
    setPresetService(typeof service === "string" ? service : null);
    setIsOpen(true);
  }, []);
  const closeLeadForm = useCallback(() => setIsOpen(false), []);

  return (
    <LeadFormContext.Provider
      value={{ isOpen, openLeadForm, closeLeadForm, presetService }}
    >
      {children}
      <LeadFormModal />
    </LeadFormContext.Provider>
  );
}

const inputCls =
  "w-full rounded-[14px] border border-button/60 bg-bg px-4 py-3 font-body text-[15px] text-heading placeholder:text-heading/40 outline-none transition-colors focus:border-supportive";

const labelCls =
  "mb-1.5 block font-body text-sm font-medium text-heading";

function LeadFormModal() {
  const { isOpen, closeLeadForm, presetService } = useLeadForm();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const closeTimer = useRef(null);
  const honeypotRef = useRef(null);

  const handleClose = useCallback(() => {
    setShow(false);
    closeTimer.current = setTimeout(closeLeadForm, 200);
  }, [closeLeadForm]);

  useEffect(() => {
    if (!isOpen) return;
    /* Card se aaya preset — woh service pehle se selected khulegi */
    setServices(presetService ? [presetService] : []);
    const raf = requestAnimationFrame(() => setShow(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(closeTimer.current);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, handleClose, presetService]);

  /* Reset on close — form opens fresh next time */
  useEffect(() => {
    if (!isOpen) {
      setShow(false);
      setStatus("idle");
      setErrorMsg("");
      setServices([]);
    }
  }, [isOpen]);

  const toggleService = (s) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() && !phone.trim()) {
      setStatus("error");
      setErrorMsg(
        "Please fill in at least one of Email ID or Mobile Number — so we can contact you."
      );
      return;
    }
    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID_HERE") {
      setStatus("error");
      setErrorMsg(
        "This form isn't set up yet — the site owner still needs to add the Formspree ID (see the setup steps at the top of this file)."
      );
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim() || "—",
            phone: phone.trim() || "—",
            services: services.length ? services.join(", ") : "—",
            _subject: `New enquiry from ${name.trim()} — Code n Kraft`,
            _gotcha: honeypotRef.current?.value || "",
          }),
        }
      );
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again in a bit.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      {/* Backdrop — click karne pe band */}
      <button
        type="button"
        aria-label="Close form"
        onClick={handleClose}
        className={`absolute inset-0 cursor-default bg-heading/50 backdrop-blur-[2px] transition-opacity duration-200 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Card */}
      <div
        className={`relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[24px] border border-button bg-surface p-6 shadow-2xl transition-all duration-200 md:p-8 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close X */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close form"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-bg text-heading transition-transform hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          /* ── Success state ── */
          <div className="py-8 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-button">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12.5l5 5L20 6.5"
                  stroke="#44394c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-heading">
              All done{name ? `, ${name.trim().split(" ")[0]}` : ""}!
            </h3>
            <p className="mx-auto mt-2 max-w-[340px] font-body text-sm text-heading/70">
              Your enquiry has reached us. We&apos;ll contact you within 24
              hours.
            </p>
            <div className="mt-6 flex justify-center">
              <Button onClick={handleClose} width="w-[200px]">
                Close
              </Button>
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit}>
            <p className="font-label text-xs uppercase tracking-[0.2em] text-supportive">
              Enquiry
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-heading md:text-[28px]">
              Let&apos;s build your presence
            </h3>
            <p className="mt-2 font-body text-sm text-heading/70">
              Fill in your details — your enquiry will reach our email as
              soon as you submit.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="lead-name" className={labelCls}>
                  Name <span className="text-supportive">*</span>
                </label>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>

              <div>
                <p className="mb-1.5 font-body text-sm text-heading/70">
                  Email or Mobile —{" "}
                  <span className="font-medium text-heading">
                    at least one is required
                  </span>
                  , so we can contact you.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="lead-email" className={labelCls}>
                      Email ID
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className={labelCls}>
                      Mobile Number
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 …"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>

              <div>
                <span className={labelCls}>
                  Which services are you interested in?{" "}
                  <span className="font-normal text-heading/50">
                    (you can select multiple)
                  </span>
                </span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const active = services.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        aria-pressed={active}
                        className={`rounded-full border px-4 py-2 font-body text-sm transition-all ${
                          active
                            ? "border-button bg-button font-medium text-heading"
                            : "border-button/50 bg-bg text-heading/70 hover:border-button hover:text-heading"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Honeypot — for bots, invisible to users */}
              <input
                ref={honeypotRef}
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {status === "error" && (
                <p className="font-body text-sm text-red-600">{errorMsg}</p>
              )}

              <Button
                type="submit"
                width="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </Button>
              <p className="text-center font-body text-xs text-heading/50">
                No spam, promise — we&apos;ll only talk about your enquiry.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
