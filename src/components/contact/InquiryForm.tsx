import { useRef, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { contactPage, projectTypeOptions, budgetOptions, timelineOptions } from '@/data/portfolio';

type Status = 'idle' | 'sending' | 'sent';

/**
 * Right column of the /contact page: the full project inquiry form.
 * Budget and timeline are single-select "pill" toggles (not native radios),
 * matching the Stitch export's interactive tag behavior.
 */
export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('sending');
    // Simulated submission — swap this block for a real API/email call.
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setBudget(null);
        setTimeline(null);
        formRef.current?.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="lg:col-span-7">
      <motion.div
        className="glass-panel p-6 md:p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      >
        <form className="space-y-10" ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-secondary-fixed" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="form-input w-full px-4 py-2.5 rounded-lg font-body-md text-on-background placeholder:text-on-surface-variant/30"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-secondary-fixed" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="form-input w-full px-4 py-2.5 rounded-lg font-body-md text-on-background placeholder:text-on-surface-variant/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-label-md text-label-md text-secondary-fixed" htmlFor="company">
              Company <span className="text-on-surface-variant/40">(Optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Inc."
              className="form-input w-full px-4 py-2.5 rounded-lg font-body-md text-on-background placeholder:text-on-surface-variant/30"
            />
          </div>

          <div className="space-y-2">
            <label className="font-label-md text-label-md text-secondary-fixed" htmlFor="projectType">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              required
              className="form-input w-full px-4 py-2.5 rounded-lg font-body-md text-on-background appearance-none cursor-pointer"
            >
              <option disabled value="">
                Select a category
              </option>
              {projectTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label className="font-label-md text-label-md text-secondary-fixed">Estimated Budget Range</label>
            <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Estimated budget range">
              {budgetOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={budget === opt.value}
                  onClick={() => setBudget(opt.value)}
                  className={`selection-tag px-5 py-2 rounded-full font-label-md text-label-md ${
                    budget === opt.value ? 'active' : ''
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <input type="hidden" name="budget" value={budget ?? ''} />
          </div>

          <div className="space-y-4">
            <label className="font-label-md text-label-md text-secondary-fixed">Target Timeline</label>
            <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Target timeline">
              {timelineOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={timeline === opt.value}
                  onClick={() => setTimeline(opt.value)}
                  className={`selection-tag px-5 py-2 rounded-full font-label-md text-label-md ${
                    timeline === opt.value ? 'active' : ''
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <input type="hidden" name="timeline" value={timeline ?? ''} />
          </div>

          <div className="space-y-2">
            <label className="font-label-md text-label-md text-secondary-fixed" htmlFor="description">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Tell me about the problem you're solving, the desired outcome, and any specific technical constraints..."
              className="form-input w-full px-4 py-2.5 rounded-lg font-body-md text-on-background placeholder:text-on-surface-variant/30 resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full py-3 rounded-lg font-label-md text-[15px] font-bold transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 ${
                status === 'sent' ? 'bg-green-500 text-white' : 'bg-[#FAFAFA] text-[#09090B] hover:bg-brand-accent hover:text-white'
              }`}
            >
              {status === 'idle' && (
                <>
                  Send Inquiry <Send size={18} />
                </>
              )}
              {status === 'sending' && (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              )}
              {status === 'sent' && (
                <>
                  <CheckCircle2 size={18} /> Inquiry Sent
                </>
              )}
            </button>
            <p className="mt-4 text-center font-label-md text-label-md text-on-surface-variant/60">
              {contactPage.respondCopy}
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
