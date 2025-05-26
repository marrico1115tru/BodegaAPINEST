import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Areas } from "../../areas/entities/Areas.entity";
import { Municipios } from "../../municipios/entities/Municipios.entity";
import { Sedes } from "../../sedes/entities/Sedes.entity";

@Entity("centroformacion", { schema: "public" })
export class Centroformacion {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", {
    name: "ubicacion",
    nullable: true,
    length: 150,
  })
  ubicacion: string | null;

  @Column("character varying", { name: "telefono", nullable: true, length: 20 })
  telefono: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 100 })
  email: string | null;

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

  @OneToMany(() => Areas, (areas) => areas.idCentroFormacion)
  areas: Areas[];

  @ManyToOne(() => Municipios, (municipios) => municipios.centroformacions)
  @JoinColumn([{ name: "id_municipio", referencedColumnName: "id" }])
  idMunicipio: Municipios;

  @OneToMany(() => Sedes, (sedes) => sedes.idCentroFormacion)
  sedes: Sedes[];
}
