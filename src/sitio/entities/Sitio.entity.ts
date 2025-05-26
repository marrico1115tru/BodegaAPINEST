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
import { TipoSitio } from "../../tipo_sitio/entities/TipoSitio.entity";

@Entity("sitio", { schema: "public" })
export class Sitio {
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

  @OneToMany(() => Areas, (areas) => areas.fkSitio)
  areas: Areas[];

  @ManyToOne(() => TipoSitio, (tipoSitio) => tipoSitio.sitios)
  @JoinColumn([{ name: "id_tipo_sitio", referencedColumnName: "id" }])
  idTipoSitio: TipoSitio;
}
