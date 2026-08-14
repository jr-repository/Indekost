import { useMemo, useState, type ReactNode } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { PageHeader, Pager, Panel, StatusBadge, TableToolbar } from "./ui";
import { rupiah } from "@/data/exc-kost";
import { Eye, Plus, Download } from "lucide-react";

export type Col = { key: string; label: string; money?: boolean; badge?: boolean; className?: string };

export function DataTablePage({
  title, description, columns, rows, createLabel, stats, extra,
}: {
  title: string;
  description?: string;
  columns: Col[];
  rows: Record<string, any>[];
  createLabel?: string;
  stats?: ReactNode;
  extra?: ReactNode;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Record<string, any> | null>(null);

  const filtered = useMemo(() => {
    if (!q.trim()) return rows;
    const t = q.toLowerCase();
    return rows.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(t)));
  }, [q, rows]);

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="h-3.5 w-3.5" />Export</Button>
            {createLabel && <Button variant="cta" size="sm"><Plus className="h-3.5 w-3.5" />{createLabel}</Button>}
          </>
        }
      />
      {stats}
      {extra}
      <Panel>
        <TableToolbar value={q} onChange={setQ} placeholder={`Cari di ${title.toLowerCase()}…`} />
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                <TableHead className="w-16 whitespace-nowrap text-[12px] font-semibold text-primary">
                  No
                </TableHead>
                {columns.map((c) => (
                  <TableHead key={c.key} className="whitespace-nowrap text-[12px] font-semibold text-primary">{c.label}</TableHead>
                ))}
                <TableHead className="text-right text-[12px] font-semibold text-primary">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((r, i) => (
                <TableRow key={i} className="hover:bg-secondary/40">
                  <TableCell className="whitespace-nowrap text-[13px] font-medium text-muted-foreground">
                    {i + 1}
                  </TableCell>
                  {columns.map((c) => (
                    <TableCell key={c.key} className={`whitespace-nowrap text-[13px] ${c.className ?? ""}`}>
                      {c.badge ? <StatusBadge status={String(r[c.key])} /> : c.money ? rupiah(Number(r[c.key])) : String(r[c.key])}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => setActive(r)}>
                      <Eye className="h-3.5 w-3.5" />Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 2} className="py-10 text-center text-sm text-muted-foreground">
                    Tidak ada data yang cocok dengan pencarian.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <Pager total={filtered.length} />
      </Panel>

      <Sheet open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-display text-primary">Detail {title}</SheetTitle>
            <SheetDescription>Data mockup — perubahan tidak disimpan.</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-3">
            {active &&
              Object.entries(active).map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-4 border-b border-border pb-3 text-sm">
                  <span className="capitalize text-muted-foreground">{k}</span>
                  <span className="text-right font-medium">{String(v)}</span>
                </div>
              ))}
          </div>
          <div className="mt-6 flex gap-2">
            <Button variant="cta" className="flex-1">Simpan perubahan</Button>
            <Button variant="outline" onClick={() => setActive(null)}>Tutup</Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
