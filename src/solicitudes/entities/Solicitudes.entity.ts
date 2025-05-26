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
import { EntregaMaterial } from "../../entrega_material/entities/EntregaMaterial.entity";
import { Usuarios } from "../../usuarios/entities/Usuarios.entity";

@Entity("solicitudes", { schema: "public" })
export class Solicitudes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "fecha_solicitud",
    nullable: true,
    default: () => "now()",
  })
  fechaSolicitud: Date | null;

  @Column("character varying", {
    name: "estado_solicitud",
    nullable: true,
    length: 50,
  })
  estadoSolicitud: string | null;

  @Column("timestamp without time zone", {
    name: "fecha_finalizacion",
    nullable: true,
  })
  fechaFinalizacion: Date | null;

  @OneToMany(
    () => DetalleSolicitud,
    (detalleSolicitud) => detalleSolicitud.idSolicitud
  )
  detalleSolicituds: DetalleSolicitud[];

  @OneToMany(
    () => EntregaMaterial,
    (entregaMaterial) => entregaMaterial.idSolicitud
  )
  entregaMaterials: EntregaMaterial[];

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.solicitudes)
  @JoinColumn([{ name: "id_usuario_solicitante", referencedColumnName: "id" }])
  idUsuarioSolicitante: Usuarios;
}
