import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EntregaMaterial } from "../../entrega_material/entities/EntregaMaterial.entity";
import { Solicitudes } from "../../solicitudes/entities/Solicitudes.entity";
import { Areas } from "../../areas/entities/Areas.entity";
import { FichasFormacion } from "../../fichas_formacion/entities/FichasFormacion.entity";
import { Roles } from "../../roles/entities/Roles.entity";


@Entity("usuarios", { schema: "public" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "apellido",
    nullable: true,
    length: 100,
  })
  apellido: string | null;

  @Column("character varying", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("character varying", {
    name: "cedula",
    nullable: true,
    unique: true,
    length: 50,
  })
  cedula: string | null;

  @Column("character varying", {
    name: "email",
    nullable: true,
    unique: true,
    length: 100,
  })
  email: string | null;

  @Column("character varying", { name: "telefono", nullable: true, length: 20 })
  telefono: string | null;

  @Column("character varying", { name: "cargo", nullable: true, length: 100 })
  cargo: string | null;

  @Column("integer", { name: "id_ficha", nullable: true, unique: true })
  idFicha: number | null;

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
    () => EntregaMaterial,
    (entregaMaterial) => entregaMaterial.idUsuarioResponsable
  )
  entregaMaterials: EntregaMaterial[];

  @OneToMany(
    () => Solicitudes,
    (solicitudes) => solicitudes.idUsuarioSolicitante
  )
  solicitudes: Solicitudes[];

  @ManyToOne(() => Areas, (areas) => areas.usuarios)
  @JoinColumn([{ name: "id_area", referencedColumnName: "id" }])
  idArea: Areas;

  @OneToOne(
    () => FichasFormacion,
    (fichasFormacion) => fichasFormacion.usuarios
  )
  @JoinColumn([{ name: "id_ficha", referencedColumnName: "id" }])
  idFicha2: FichasFormacion;

  @ManyToOne(() => Roles, (roles) => roles.usuarios)
  @JoinColumn([{ name: "id_rol", referencedColumnName: "id" }])
  idRol: Roles;
}
