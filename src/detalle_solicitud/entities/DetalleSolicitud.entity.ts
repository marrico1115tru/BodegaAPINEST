import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Productos } from "../../productos/entities/Productos.entity";
import { Solicitudes } from "../../solicitudes/entities/Solicitudes.entity";

@Entity("detalle_solicitud", { schema: "public" })
export class DetalleSolicitud {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "cantidad_solicitada", nullable: true })
  cantidadSolicitada: number | null;

  @Column("text", { name: "observaciones", nullable: true })
  observaciones: string | null;

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

  @ManyToOne(() => Productos, (productos) => productos.detalleSolicituds)
  @JoinColumn([{ name: "id_producto", referencedColumnName: "id" }])
  idProducto: Productos;

  @ManyToOne(() => Solicitudes, (solicitudes) => solicitudes.detalleSolicituds)
  @JoinColumn([{ name: "id_solicitud", referencedColumnName: "id" }])
  idSolicitud: Solicitudes;
}
