import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesosModule } from './accesos/accesos.module';
import { AreasModule } from './areas/areas.module';
import { CentroformacionModule } from './centroformacion/centroformacion.module';
import { DetalleSolicitudModule } from './detalle_solicitud/detalle_solicitud.module';
import { EntregaMaterialModule } from './entrega_material/entrega_material.module';
import { FichasFormacionModule } from './fichas_formacion/fichas_formacion.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { OpcionesModule } from './opciones/opciones.module';
import { ProductosModule } from './productos/productos.module';
import { RolesModule } from './roles/roles.module';
import { SedesModule } from './sedes/sedes.module';
import { SitioModule } from './sitio/sitio.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { TipoSitioModule } from './tipo_sitio/tipo_sitio.module';
import { TituladosModule } from './titulados/titulados.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'INNOVASOFT',
      entities:[__dirname+'/**/*.entity{.ts,js}'],
      autoLoadEntities: true,
      synchronize: true, 
    }),
    AccesosModule,
    AreasModule,
    CentroformacionModule,
    DetalleSolicitudModule,
    EntregaMaterialModule,
    FichasFormacionModule,
    MunicipiosModule,
    OpcionesModule,
    ProductosModule,
    RolesModule,
    SedesModule,
    SitioModule,
    SolicitudesModule,
    TipoSitioModule,
    TituladosModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
