import { useMemo, useState } from "react";
import * as React from "react";

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

type Tone = "gold" | "blue" | "green" | "red" | "slate";
function toneClasses(tone: Tone) {
    switch (tone) {
        case "gold":
            return "bg-amber-500/10 text-amber-800 ring-amber-500/20";
        case "blue":
            return "bg-sky-500/10 text-sky-800 ring-sky-500/20";
        case "green":
            return "bg-emerald-500/10 text-emerald-800 ring-emerald-500/20";
        case "red":
            return "bg-rose-500/10 text-rose-800 ring-rose-500/20";
        default:
            return "bg-slate-500/10 text-slate-800 ring-slate-500/20";
    }
}

const Icon = {
    Logo: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M8 8.5C8 6.014 9.79 4 12 4s4 2.014 4 4.5v2.2c0 .9.49 1.73 1.27 2.18.9.52 1.46 1.51 1.46 2.58V18c0 1.657-1.343 3-3 3H8c-1.657 0-3-1.343-3-3v-.54c0-1.07.56-2.06 1.46-2.58.78-.45 1.27-1.28 1.27-2.18V8.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M10 4.5V3c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v1.5"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path d="M9 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 13v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    ArrowRight: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path
                d="M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Search: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <path
                d="M16.5 16.5 21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    ),
    Bell: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Z"
                fill="currentColor"
                opacity="0.85"
            />
            <path
                d="M18 10a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Wrench: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M21 7.5a5.5 5.5 0 0 1-7.74 5.06L7 18.82A2 2 0 0 1 4.17 16l6.26-6.26A5.5 5.5 0 0 1 16.5 3l-2 2 3.5 3.5 3-1Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Sparkle: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M12 2l1.2 5.1L18 8.3l-4.8 1.2L12 14l-1.2-4.5L6 8.3l4.8-1.2L12 2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M19 13l.7 2.7L22 16.4l-2.3.7L19 20l-.7-2.9L16 16.4l2.3-.7L19 13Z"
                fill="currentColor"
                opacity="0.75"
            />
        </svg>
    ),
    Shield: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9.5 12.2 11.3 14l3.2-3.8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    File: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path d="M14 3v3h3" stroke="currentColor" strokeWidth="1.6" />
            <path
                d="M8 11h8M8 15h8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    ),
    Check: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M20 6 9 17l-5-5"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Help: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M9.6 9.2a2.6 2.6 0 1 1 4.2 2.2c-.9.6-1.3 1-1.3 2.1v.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path d="M12 17.3h.01" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
    ),
    Login: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path
                d="M10 17l5-5-5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M15 12H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path
                d="M21 4v16a2 2 0 0 1-2 2h-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    ),
    Menu: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    X: (p: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...p}>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
};

/** --------------------------------
 *  Layout helper: FULL WIDTH (no max-w)
 *  -------------------------------- */
function Shell({
                   children,
                   className,
               }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "w-full px-4 sm:px-6 lg:px-10 2xl:px-16", // fluid full width
                className
            )}
        >
            {children}
        </div>
    );
}

/** --------------------------------
 *  UI primitives (Tailwind-only)
 *  -------------------------------- */
function Badge({
                   children,
                   tone = "slate",
                   className,
               }: {
    children: React.ReactNode;
    tone?: Tone;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                toneClasses(tone),
                className
            )}
        >
      {children}
    </span>
    );
}

function Card({
                  children,
                  className,
              }: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-3xl border border-slate-200/70 bg-white/70 shadow-[0_12px_34px_-24px_rgba(15,23,42,.40)] backdrop-blur",
                className
            )}
        >
            {children}
        </div>
    );
}

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
    return (
        <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">{title}</div>
            {desc ? <div className="mt-0.5 text-sm text-slate-500">{desc}</div> : null}
        </div>
    );
}

type ButtonVariant = "primary" | "secondary" | "ghost";
function Button({
                    children,
                    onClick,
                    className,
                    variant = "primary",
                    type = "button",
                }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: ButtonVariant;
    type?: "button" | "submit" | "reset";
}) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 " +
        "disabled:opacity-60 disabled:cursor-not-allowed";

    const styles =
        variant === "primary"
            ? // NOTE: text-white placed at the end so it never loses to other classes
            "bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow-md text-white"
            : variant === "secondary"
                ? "border border-slate-200 bg-white/70 text-slate-900 hover:bg-white hover:border-slate-300"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100";

    return (
        <button type={type} onClick={onClick} className={cn(base, styles, className)}>
            {children}
        </button>
    );
}

function IconPill({
                      icon,
                      label,
                      value,
                  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-500/10 text-amber-800 ring-1 ring-amber-500/15">
                {icon}
            </div>
            <div className="leading-tight">
                <div className="text-xs text-slate-500">{label}</div>
                <div className="text-sm font-semibold text-slate-900">{value}</div>
            </div>
        </div>
    );
}

/** --------------------------------
 *  Page data
 *  -------------------------------- */
type AnnouncementTag = "Info" | "Maintenance" | "Update";
type Announcement = {
    title: string;
    meta: string;
    body: string;
    tag: AnnouncementTag;
    date: string;
};

function tagTone(tag: AnnouncementTag): Tone {
    if (tag === "Info") return "blue";
    if (tag === "Maintenance") return "red";
    return "gold";
}

/** --------------------------------
 *  App
 *  -------------------------------- */
export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState<"all" | AnnouncementTag>("all");

    const announcements: Announcement[] = useMemo(
        () => [
            {
                title: "Pengumuman Penerima Beasiswa (Tahap Akhir)",
                meta: "Lantern Scholarship • Batch 2026",
                body:
                    "Daftar penerima akan dipublikasikan setelah proses verifikasi akhir. Mohon menunggu informasi resmi melalui portal.",
                tag: "Info",
                date: "Terbaru",
            },
            {
                title: "Jadwal Maintenance Sistem",
                meta: "Ops • Sistem Informasi",
                body:
                    "Akan dilakukan maintenance singkat untuk pembaruan layanan portal. Setelah selesai, layanan akan kembali normal.",
                tag: "Maintenance",
                date: "Hari ini",
            },
            {
                title: "Pemberitahuan Email Otomatis",
                meta: "Support • Helpdesk",
                body:
                    "Jika Anda menerima email notifikasi yang tidak sesuai, mohon abaikan dan laporkan melalui menu Helpdesk.",
                tag: "Update",
                date: "Minggu ini",
            },
        ],
        []
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return announcements
            .filter((a) => (filter === "all" ? true : a.tag === filter))
            .filter((a) => {
                if (!q) return true;
                const blob = `${a.title} ${a.meta} ${a.body} ${a.tag}`.toLowerCase();
                return blob.includes(q);
            });
    }, [announcements, filter, query]);

    return (
        <div className="min-h-screen bg-[#f7f7fb] text-slate-900">
            {/* Background */}
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-36 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-amber-400/18 blur-3xl" />
                <div className="absolute top-20 -right-55 h-155 w-155 rounded-full bg-sky-400/14 blur-3xl" />
                <div className="absolute -bottom-55 -left-55 h-155 w-155 rounded-full bg-violet-400/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,.18)_1px,transparent_0)] bg-size-[24px_24px]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/65 backdrop-blur">
                <Shell className="py-4">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/70 ring-1 ring-slate-200 shadow-sm">
                                <Icon.Logo className="h-6 w-6 text-amber-800" />
                            </div>

                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                    <div className="truncate text-base font-semibold tracking-tight sm:text-lg">
                                        Lantern Scholarship Portal
                                    </div>
                                    <Badge tone="gold">Batch 2026</Badge>
                                    <div className="hidden items-center gap-2 sm:flex">
                                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                        <span className="text-xs text-slate-500">Online • Monitoring aktif</span>
                                    </div>
                                </div>
                                <div className="hidden text-xs text-slate-500 sm:block">
                                    Registrasi • Verifikasi • Pengumuman • Bantuan
                                </div>
                            </div>
                        </div>

                        {/* Desktop nav */}
                        <nav className="hidden items-center gap-2 md:flex">
                            <a
                                className="rounded-xl px-3 py-2 text-sm text-slate-600 no-underline visited:text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                                href="#"
                            >
                                Pengumuman
                            </a>
                            <a
                                className="rounded-xl px-3 py-2 text-sm text-slate-600 no-underline visited:text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                                href="#"
                            >
                                Program
                            </a>
                            <a
                                className="rounded-xl px-3 py-2 text-sm text-slate-600 no-underline visited:text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                                href="#"
                            >
                                Bantuan
                            </a>

                            <Button className="ml-2">
                                Masuk
                                <Icon.Login className="ml-2 h-4 w-4" />
                            </Button>
                        </nav>

                        {/* Mobile controls */}
                        <div className="flex items-center gap-2 md:hidden">
                            <Button className="px-3 py-2" aria-label="Login">
                                <Icon.Login className="h-5 w-5" />
                            </Button>
                            <button
                                onClick={() => setMenuOpen(true)}
                                className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white/70 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2"
                                aria-label="Open menu"
                            >
                                <Icon.Menu className="h-5 w-5 text-slate-700" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile drawer */}
                    {menuOpen && (
                        <div className="fixed inset-0 z-50 md:hidden">
                            <div className="absolute inset-0 bg-slate-900/30" onClick={() => setMenuOpen(false)} />
                            <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
                                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <Icon.Logo className="h-6 w-6 text-amber-800" />
                                        <div className="text-sm font-semibold">Menu</div>
                                    </div>
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="grid h-10 w-10 place-items-center rounded-2xl hover:bg-slate-100 transition"
                                        aria-label="Close menu"
                                    >
                                        <Icon.X className="h-5 w-5 text-slate-700" />
                                    </button>
                                </div>

                                <div className="p-4 space-y-2">
                                    {["Pengumuman", "Program", "Bantuan"].map((t) => (
                                        <a
                                            key={t}
                                            href="#"
                                            className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 no-underline visited:text-slate-800 hover:bg-slate-50 transition"
                                        >
                                            {t}
                                        </a>
                                    ))}

                                    <div className="pt-2">
                                        <Button className="w-full">
                                            Masuk
                                            <Icon.Login className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="pt-2 text-xs text-slate-500">
                                        © {new Date().getFullYear()} Lantern Scholarship Committee
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Shell>
            </header>

            <main>
                <Shell className="py-6 sm:py-10">
                    {/* Top notice */}
                    <div className="mb-6 rounded-3xl border border-amber-200/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-start gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-500/10 text-amber-800 ring-1 ring-amber-500/15">
                                    <Icon.Wrench className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">Ops Notice</div>
                                    <div className="text-sm text-slate-600">
                                        Pemeliharaan singkat sebelum jadwal pengumuman. Jika ada kendala, laporkan melalui Helpdesk.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <Button variant="secondary" className="w-full sm:w-auto">
                                    Hubungi Helpdesk
                                </Button>
                                <Button className="w-full sm:w-auto">
                                    Cek Status <Icon.ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Hero */}
                    <div className="grid gap-5 lg:grid-cols-12">
                        <Card className="relative overflow-hidden lg:col-span-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-white/0 to-sky-500/10" />
                            <div className="relative p-6 sm:p-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge tone="gold">Pendaftaran dibuka</Badge>
                                    <Badge tone="blue">Verifikasi berlangsung</Badge>
                                    <Badge tone="slate">Pengumuman: tahap akhir</Badge>
                                </div>

                                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                    Lantern Scholarship
                                </h1>
                                <p className="mt-3 max-w-3xl text-base text-slate-600">
                                    Tingkatkan Diri, Majukan Negeri
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                    <IconPill icon={<Icon.Shield className="h-5 w-5" />} label="Keamanan" value="Dokumen terenkripsi" />
                                    <IconPill icon={<Icon.File className="h-5 w-5" />} label="Proses" value="Checklist kelengkapan" />
                                    <IconPill icon={<Icon.Help className="h-5 w-5" />} label="Support" value="Respon < 24 jam" />
                                </div>

                                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                                    <Button className="w-full sm:w-auto">
                                        Daftar Beasiswa <Icon.ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="secondary" className="w-full sm:w-auto">
                                        Unggah / Perbarui Dokumen
                                    </Button>
                                    <Button variant="secondary" className="w-full sm:w-auto">
                                        Lihat Panduan
                                    </Button>
                                </div>

                                {/* Progress */}
                                <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <div className="text-sm font-semibold">Progress Seleksi (estimasi)</div>
                                            <div className="text-xs text-slate-500">
                                                Indikator ringkas untuk memudahkan pemantauan.
                                            </div>
                                        </div>
                                        <Badge tone="gold">78%</Badge>
                                    </div>

                                    <div className="mt-4">
                                        <div className="h-3 w-full rounded-full bg-slate-200">
                                            <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-amber-500 to-slate-900" />
                                        </div>
                                        <div className="mt-3 flex justify-between text-xs text-slate-500">
                                            <span>Pendaftaran</span>
                                            <span>Verifikasi</span>
                                            <span>Pengumuman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Steps */}
                        <Card className="lg:col-span-4">
                            <div className="p-6 sm:p-7">
                                <SectionTitle title="Ringkasan Tahapan" desc="Status periode berjalan." />

                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            title: "Pendaftaran",
                                            desc: "Lengkapi biodata & unggah dokumen dasar.",
                                            tone: "green" as Tone,
                                            right: <Badge tone="green">Dibuka</Badge>,
                                            icon: <Icon.Check className="h-5 w-5" />,
                                        },
                                        {
                                            title: "Verifikasi Dokumen",
                                            desc: "Admin memeriksa kelengkapan & kesesuaian.",
                                            tone: "blue" as Tone,
                                            right: <Badge tone="blue">Berlangsung</Badge>,
                                            icon: <Icon.File className="h-5 w-5" />,
                                        },
                                        {
                                            title: "Pengumuman",
                                            desc: "Daftar penerima tampil setelah verifikasi final.",
                                            tone: "gold" as Tone,
                                            right: <Badge tone="gold">Tahap akhir</Badge>,
                                            icon: <Icon.Bell className="h-5 w-5" />,
                                        },
                                    ].map((s, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-4"
                                        >
                                            <div className="flex gap-3">
                                                <div className={cn("grid h-11 w-11 place-items-center rounded-2xl ring-1", toneClasses(s.tone))}>
                                                    {s.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold">{s.title}</div>
                                                    <div className="mt-0.5 text-xs text-slate-500">{s.desc}</div>
                                                </div>
                                            </div>
                                            <div className="shrink-0">{s.right}</div>
                                        </div>
                                    ))}

                                    <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/80 to-amber-50/60 p-4">
                                        <div className="text-xs font-semibold text-slate-700">Catatan</div>
                                        <div className="mt-1 text-sm text-slate-600">
                                            Akses daftar penerima bersifat terbatas dan hanya tersedia setelah verifikasi final.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Announcements + Applicant dashboard */}
                    <div className="mt-6 grid gap-5 lg:grid-cols-12">
                        <Card className="lg:col-span-8">
                            <div className="p-6 sm:p-7">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                    <SectionTitle title="Pengumuman" desc="Pembaruan terbaru dari portal." />

                                    <div className="w-full sm:w-[380px]">
                                        <div className="relative">
                                            <Icon.Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                            <input
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                placeholder="Cari pengumuman…"
                                                className={cn(
                                                    "h-11 w-full rounded-2xl border border-slate-200 bg-white/80 pl-10 pr-3 text-sm text-slate-900",
                                                    "outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300"
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {[
                                        { key: "all", label: "Semua" },
                                        { key: "Info", label: "Info" },
                                        { key: "Maintenance", label: "Maintenance" },
                                        { key: "Update", label: "Update" },
                                    ].map((b) => {
                                        const active = filter === (b.key as never);
                                        return (
                                            <button
                                                key={b.key}
                                                onClick={() => setFilter(b.key as never)}
                                                className={cn(
                                                    "rounded-2xl px-3 py-2 text-sm font-semibold ring-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2",
                                                    active
                                                        ? "bg-slate-900 text-white ring-slate-900/20"
                                                        : cn(
                                                            b.key === "Info"
                                                                ? toneClasses("blue")
                                                                : b.key === "Maintenance"
                                                                    ? toneClasses("red")
                                                                    : b.key === "Update"
                                                                        ? toneClasses("gold")
                                                                        : toneClasses("slate"),
                                                            "hover:bg-white/80"
                                                        )
                                                )}
                                            >
                                                {b.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Announcement list */}
                                <div className="mt-5 space-y-3">
                                    {filtered.length === 0 ? (
                                        <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 text-sm text-slate-600">
                                            Tidak ada pengumuman yang cocok dengan pencarian kamu.
                                        </div>
                                    ) : (
                                        filtered.map((a, idx) => (
                                            <div
                                                key={`${a.title}-${idx}`}
                                                className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 hover:bg-white/85 transition"
                                            >
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                    <div className="flex items-start gap-3">
                                                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 ring-1 ring-slate-200 text-slate-800">
                                                            {a.tag === "Info" ? (
                                                                <Icon.Bell className="h-5 w-5" />
                                                            ) : a.tag === "Maintenance" ? (
                                                                <Icon.Wrench className="h-5 w-5" />
                                                            ) : (
                                                                <Icon.Sparkle className="h-5 w-5" />
                                                            )}
                                                        </div>

                                                        <div className="min-w-0">
                                                            <div className="truncate text-sm font-semibold">{a.title}</div>
                                                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                                                <span>{a.meta}</span>
                                                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                                <span>{a.date}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="shrink-0">
                                                        <Badge tone={tagTone(a.tag)}>{a.tag}</Badge>
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm text-slate-600">{a.body}</p>

                                                <div className="mt-4 flex items-center justify-between">
                                                    <Button variant="ghost" className="px-3 py-2">
                                                        Lihat detail <Icon.ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                    <div className="text-xs text-slate-400">
                                                        ID: LS-{String(1020 + idx).padStart(4, "0")}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </Card>

                        {/* Applicant dashboard */}
                        <Card className="lg:col-span-4">
                            <div className="p-6 sm:p-7">
                                <SectionTitle title="Dashboard Pelamar" desc="Akses fitur setelah login." />

                                <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/70 p-5">
                                    <div className="text-xs font-semibold text-slate-600">Menu</div>

                                    <div className="mt-3 grid gap-2">
                                        {[
                                            { t: "Dokumen", ico: <Icon.File className="h-4 w-4" /> },
                                            { t: "Wawancara", ico: <Icon.Sparkle className="h-4 w-4" /> },
                                            { t: "Penerima", ico: <Icon.Bell className="h-4 w-4" /> },
                                        ].map((x) => (
                                            <button
                                                key={x.t}
                                                disabled
                                                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-100/60 px-4 py-3 text-sm font-semibold text-slate-400"
                                                title="Login diperlukan"
                                            >
                        <span className="inline-flex items-center gap-2">
                          <span className="opacity-70">{x.ico}</span> {x.t}
                        </span>
                                                <Icon.ArrowRight className="h-4 w-4 opacity-40" />
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3 text-xs text-slate-500">
                                        Untuk melihat daftar penerima, diperlukan verifikasi admin setelah pengumuman final.
                                    </div>
                                </div>

                                <div className="mt-4 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/80 to-sky-50/60 p-5">
                                    <div className="flex items-start gap-3">
                                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                                            <Icon.Login className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Login diperlukan</div>
                                            <div className="mt-1 text-sm text-slate-600">
                                                Masuk untuk melihat status pendaftaran, notifikasi resmi, dan pengumuman personal.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-col gap-2">
                                        <Button className="w-full">
                                            Masuk sekarang <Icon.ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="secondary" className="w-full">
                                            Tanya Helpdesk <span className="ml-2 inline-flex"><Icon.Help className="h-4 w-4" /></span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Footer */}
                    <footer className="mt-10 border-t border-slate-200/70 py-6">
                        <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                            <div>© {new Date().getFullYear()} Lantern Scholarship Committee</div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="hover:text-slate-800 hover:underline">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="hover:text-slate-800 hover:underline">
                                    Syarat & Ketentuan
                                </a>
                                <a href="#" className="hover:text-slate-800 hover:underline">
                                    Status Layanan
                                </a>
                            </div>
                        </div>
                    </footer>
                </Shell>
            </main>
        </div>
    );
}