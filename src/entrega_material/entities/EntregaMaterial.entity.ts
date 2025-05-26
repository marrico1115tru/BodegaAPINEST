import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Solicitudes } from "../../solicitudes/entities/Solicitudes.entity";
import { Usuarios } from "../../usuarios/entities/Usuarios.entity";

@Entity("entrega_material", { schema: "public" })
export class EntregaMaterial {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "fecha_entrega",
    nullable: true,
    default: () => "now()",
  })
  fechaEntrega: Date | null;

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

  @ManyToOne(() => Solicitudes, (solicitudes) => solicitudes.entregaMaterials)
  @JoinColumn([{ name: "id_solicitud", referencedColumnName: "id" }])
  idSolicitud: Solicitudes;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.entregaMaterials)
  @JoinColumn([{ name: "id_usuario_responsable", referencedColumnName: "id" }])
  idUsuarioResponsable: Usuarios;
}
