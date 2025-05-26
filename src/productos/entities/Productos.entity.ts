import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetalleSolicitud } from "../../detalle_solicitud/entities/DetalleSolicitud.entity";
import { Areas } from "../../areas/entities/Areas.entity";

@Entity("productos", { schema: "public" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "codigo_sena",
    nullable: true,
    length: 50,
  })
  codigoSena: string | null;

  @Column("character varying", { name: "unpsc", nullable: true, length: 50 })
  unpsc: string | null;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("text", { name: "descripcion", nullable: true })
  descripcion: string | null;

  @Column("integer", { name: "cantidad", nullable: true })
  cantidad: number | null;

  @Column("character varying", {
    name: "categoria",
    nullable: true,
    length: 100,
  })
  categoria: string | null;

  @Column("character varying", {
    name: "tipo_materia",
    nullable: true,
    length: 100,
  })
  tipoMateria: string | null;

  @Column("date", { name: "fecha_vencimiento", nullable: true })
  fechaVencimiento: string | null;

  @Column("timestamp without time zone", {
    name: "fecha_creacion",
    nullable: true,
    default: () => "now()",
  })
  fechaCreacion: Date | null;

  @Column("timestamp without time zone", {
    name: "fecha_finalizacion",
    nullable: true,
  })
  fechaFinalizacion: Date | null;

  @OneToMany(
    () => DetalleSolicitud,
    (detalleSolicitud) => detalleSolicitud.idProducto
  )
  detalleSolicituds: DetalleSolicitud[];

  @ManyToOne(() => Areas, (areas) => areas.productos)
  @JoinColumn([{ name: "id_area", referencedColumnName: "id" }])
  idArea: Areas;
}
