/* EMAVIAS - Sistema de Gestion Administrativa - app.js */
const AUTH = {
  users: [
    { user: 'admin', pass: '1234', name: 'Administrador', role: 'Administrador del Sistema' },
    { user: 'tony', pass: 'emavias2025', name: 'Tony Aliaga', role: 'Tecnico de Costeo de Obras' },
    { user: 'gerente', pass: 'gerencia', name: 'Gerente Tecnico', role: 'Gerente Tecnico' }
  ],
  login(user, pass) {
    const u = this.users.find(x => x.user === user && x.pass === pass);
    if (u) { localStorage.setItem('ema_user', JSON.stringify(u)); return u; }
    return null;
  },
  logout() { localStorage.removeItem('ema_user'); window.location.href = 'index.html'; },
  current() { try { return JSON.parse(localStorage.getItem('ema_user')); } catch { return null; } },
  require() { const u = this.current(); if (!u) { window.location.href = 'index.html'; return null; } return u; }
};

const DB = {
  get(key, def=[]) { try { return JSON.parse(localStorage.getItem('ema_'+key)) || def; } catch { return def; } },
  set(key, val) { localStorage.setItem('ema_'+key, JSON.stringify(val)); },
  nextId(key) { const d=this.get(key); const ids=d.map(x=>x.id||0); return (ids.length?Math.max(...ids):0)+1; }
};

function initData() {
  if (DB.get('obras').length===0) {
    DB.set('obras',[
      {id:1,fecha:'2025-11-19',unidad:'MALLASILLA',ubicacion:'CALLE 9',zona:'MALLASILLA',longitud:398,ancho:1,area:398,unid:'M2',tipo:'ASFALTADO',grupo:'ASFALTO 3',codigo:'EMA-36',estado:'Completado',dia:1,
       boletaMezcla:'3174',cantMezcla:8.12,boletaBacheo:'',cantBacheo:0,boletaBase:'',cantBase:0,
       tipoLigante:'MC30',obsLigante:'Calle 9 tramo completo',cantLigante:180,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:3,cantDiesel:10,
       hrsTerminadora:4,hrsRodilloLiso:4,hrsRodilloNeuma:0,hrsRetroex:0,hrsMotoNivel:0,hrsTracto:0,
       hrsPlancha:0,hrsCisterna:2,hrsSopladora:1,hrsVibro:0,hrsMezcladora:0,hrsMartillo:0,
       hrsAmoladora:0,hrsVolquetas:3,hrsCanter:0,hrsCamionImp:2,
       personal:12,diaPersonal:1,horas:8},
      {id:2,fecha:'2025-11-20',unidad:'MALLASILLA',ubicacion:'CALLE S/N 09',zona:'MALLASILLA',longitud:636,ancho:1,area:636,unid:'M2',tipo:'ASFALTADO',grupo:'ASFALTO 3',codigo:'EMA-37',estado:'Completado',dia:1,
       boletaMezcla:'3181',cantMezcla:11.28,boletaBacheo:'',cantBacheo:0,boletaBase:'',cantBase:0,
       tipoLigante:'MC30',obsLigante:'Calle S/N 09 tramo completo',cantLigante:250,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:3,cantDiesel:8,
       hrsTerminadora:5,hrsRodilloLiso:5,hrsRodilloNeuma:0,hrsRetroex:0,hrsMotoNivel:0,hrsTracto:0,
       hrsPlancha:0,hrsCisterna:2,hrsSopladora:1,hrsVibro:0,hrsMezcladora:0,hrsMartillo:0,
       hrsAmoladora:0,hrsVolquetas:4,hrsCanter:0,hrsCamionImp:2,
       personal:12,diaPersonal:1,horas:8},
      {id:3,fecha:'2025-10-07',unidad:'MALLASILLA',ubicacion:'CALLE 3 Y CALLE 2',zona:'MALLASILLA',longitud:202.97,ancho:1,area:202.97,unid:'M2',tipo:'ASFALTADO',grupo:'ASFALTO 2',codigo:'EMA-38',estado:'Completado',dia:1,
       boletaMezcla:'3017',cantMezcla:5.05,boletaBacheo:'',cantBacheo:0,boletaBase:'',cantBase:0,
       tipoLigante:'MC30',obsLigante:'Calle 3 y 2 empalme',cantLigante:90,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:0,cantDiesel:70,
       hrsTerminadora:3,hrsRodilloLiso:3,hrsRodilloNeuma:0,hrsRetroex:0,hrsMotoNivel:0,hrsTracto:0,
       hrsPlancha:0,hrsCisterna:1.5,hrsSopladora:1,hrsVibro:0,hrsMezcladora:0,hrsMartillo:0,
       hrsAmoladora:0,hrsVolquetas:2,hrsCanter:0,hrsCamionImp:1.5,
       personal:10,diaPersonal:1,horas:8},
      {id:4,fecha:'2025-09-18',unidad:'SAN ANTONIO',ubicacion:'CALLE LOS GLADIOLOS',zona:'TIHUANACU',longitud:427.02,ancho:1,area:427.02,unid:'M2',tipo:'ASFALTADO',grupo:'ASFALTO 2',codigo:'EMA-33',estado:'Completado',dia:1,
       boletaMezcla:'2965',cantMezcla:10.50,boletaBacheo:'',cantBacheo:0,boletaBase:'',cantBase:0,
       tipoLigante:'MC70',obsLigante:'Los Gladiolos tramo 1',cantLigante:200,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:30,cantDiesel:0,
       hrsTerminadora:4,hrsRodilloLiso:4,hrsRodilloNeuma:0,hrsRetroex:0,hrsMotoNivel:0,hrsTracto:0,
       hrsPlancha:0,hrsCisterna:2,hrsSopladora:1,hrsVibro:0,hrsMezcladora:0,hrsMartillo:0,
       hrsAmoladora:0,hrsVolquetas:3,hrsCanter:0,hrsCamionImp:2,
       personal:12,diaPersonal:1,horas:8},
      {id:5,fecha:'2026-01-15',unidad:'CENTRO',ubicacion:'AV. MARISCAL SANTA CRUZ',zona:'CENTRO',longitud:520,ancho:2,area:1040,unid:'M2',tipo:'ASFALTADO',grupo:'ASFALTO 1',codigo:'EMA-45',estado:'En Ejecucion',dia:1,
       boletaMezcla:'3350',cantMezcla:22.4,boletaBacheo:'',cantBacheo:0,boletaBase:'3349',cantBase:5.2,
       tipoLigante:'RC250',obsLigante:'Av. Mariscal tramo principal',cantLigante:450,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:5,cantDiesel:15,
       hrsTerminadora:6,hrsRodilloLiso:6,hrsRodilloNeuma:2,hrsRetroex:0,hrsMotoNivel:2,hrsTracto:0,
       hrsPlancha:0,hrsCisterna:3,hrsSopladora:2,hrsVibro:0,hrsMezcladora:0,hrsMartillo:0,
       hrsAmoladora:0,hrsVolquetas:5,hrsCanter:2,hrsCamionImp:3,
       personal:16,diaPersonal:1,horas:9},
      {id:6,fecha:'2026-02-10',unidad:'SUR',ubicacion:'CALLE MEXICO',zona:'SUR',longitud:310,ancho:1.5,area:465,unid:'M2',tipo:'BACHEO',grupo:'BACHEO 1',codigo:'EMA-46',estado:'Planificado',dia:1,
       boletaMezcla:'',cantMezcla:0,boletaBacheo:'3380',cantBacheo:9.8,boletaBase:'',cantBase:0,
       tipoLigante:'',obsLigante:'',cantLigante:0,
       cantAluvial:0,cantPiedra:0,cantArena:0,cantCemento:0,cantGasolina:2,cantDiesel:8,
       hrsTerminadora:0,hrsRodilloLiso:2,hrsRodilloNeuma:0,hrsRetroex:2,hrsMotoNivel:0,hrsTracto:0,
       hrsPlancha:3,hrsCisterna:0,hrsSopladora:1,hrsVibro:2,hrsMezcladora:0,hrsMartillo:2,
       hrsAmoladora:1,hrsVolquetas:2,hrsCanter:0,hrsCamionImp:0,
       personal:8,diaPersonal:1,horas:8}
    ]);
  }
  if (DB.get('produccion').length===0) {
    DB.set('produccion',[
      {id:1,fecha:'2025-11-19',turno:'Diurno',operador:'Bautista Llanos Ramiro',temperatura:155,cantidadTon:48.5,mezcla:'MD-12',ligante:'CAP 60/70',porcentajeLigante:5.2,estado:'Cerrado'},
      {id:2,fecha:'2025-11-20',turno:'Diurno',operador:'Alanez Mercado Victor Hugo',temperatura:158,cantidadTon:62.3,mezcla:'MD-12',ligante:'CAP 60/70',porcentajeLigante:5.2,estado:'Cerrado'},
      {id:3,fecha:'2025-12-05',turno:'Nocturno',operador:'Merma Garcia Santos Ricardo',temperatura:162,cantidadTon:55.0,mezcla:'MD-19',ligante:'CAP 60/70',porcentajeLigante:5.0,estado:'Cerrado'},
      {id:4,fecha:'2026-01-15',turno:'Diurno',operador:'Chipana Ticona Nelson Fredy',temperatura:157,cantidadTon:70.2,mezcla:'MD-12',ligante:'CAP 60/70',porcentajeLigante:5.2,estado:'Abierto'},
      {id:5,fecha:'2026-02-10',turno:'Diurno',operador:'Bautista Llanos Ramiro',temperatura:160,cantidadTon:43.8,mezcla:'MD-12',ligante:'CAP 60/70',porcentajeLigante:5.2,estado:'Abierto'}
    ]);
  }
  if (DB.get('despachos').length===0) {
    DB.set('despachos',[
      {id:1,fecha:'2025-11-19',hora:'07:30',nBoleta:'3174',volqueta:'CV-01',conductor:'Alanez Mercado Victor Hugo',volM3:8,tipoMezcla:'Bacheo',temperatura:160,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-36',destino:'Mallasilla Calle 9'},
      {id:2,fecha:'2025-11-19',hora:'09:15',nBoleta:'3175',volqueta:'VH-39',conductor:'Bautista Llanos Ramiro',volM3:8,tipoMezcla:'Bacheo',temperatura:158,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-36',destino:'Mallasilla Calle 9'},
      {id:3,fecha:'2025-11-19',hora:'11:00',nBoleta:'3176',volqueta:'CV-02',conductor:'Chipana Ticona Nelson Fredy',volM3:8,tipoMezcla:'Bacheo',temperatura:162,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-36',destino:'Mallasilla Calle 9'},
      {id:4,fecha:'2025-11-20',hora:'07:00',nBoleta:'3181',volqueta:'CV-01',conductor:'Pusarico Condori Jorge',volM3:8,tipoMezcla:'Carpeta',temperatura:160,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-37',destino:'Mallasilla Calle S/N 09'},
      {id:5,fecha:'2025-11-20',hora:'08:45',nBoleta:'3182',volqueta:'VH-39',conductor:'Magarinos Loredo Jaime',volM3:8,tipoMezcla:'Carpeta',temperatura:157,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-37',destino:'Mallasilla Calle S/N 09'},
      {id:6,fecha:'2025-11-20',hora:'10:30',nBoleta:'3183',volqueta:'CV-03',conductor:'Alanez Mercado Victor Hugo',volM3:8,tipoMezcla:'Carpeta',temperatura:159,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-37',destino:'Mallasilla Calle S/N 09'},
      {id:7,fecha:'2025-10-07',hora:'07:00',nBoleta:'3017',volqueta:'CV-02',conductor:'Bautista Llanos Ramiro',volM3:6,tipoMezcla:'Bacheo',temperatura:155,planta:'OMIP',responsable:'DEMTV',codigoObra:'EMA-38',destino:'Mallasilla Calle 3 y Calle 2'},
      {id:8,fecha:'2025-10-07',hora:'09:00',nBoleta:'3018',volqueta:'VH-42',conductor:'Chipana Ticona Nelson Fredy',volM3:6,tipoMezcla:'Bacheo',temperatura:156,planta:'OMIP',responsable:'DEMTV',codigoObra:'EMA-38',destino:'Mallasilla Calle 3 y Calle 2'},
      {id:9,fecha:'2025-09-18',hora:'07:30',nBoleta:'2965',volqueta:'CV-01',conductor:'Pusarico Condori Jorge',volM3:10,tipoMezcla:'Carpeta',temperatura:163,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-33',destino:'San Antonio Calle Los Gladiolos'},
      {id:10,fecha:'2025-09-18',hora:'09:00',nBoleta:'2966',volqueta:'VH-39',conductor:'Magarinos Loredo Jaime',volM3:10,tipoMezcla:'Carpeta',temperatura:161,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-33',destino:'San Antonio Calle Los Gladiolos'},
      {id:11,fecha:'2026-01-15',hora:'06:30',nBoleta:'3350',volqueta:'CV-01',conductor:'Alanez Mercado Victor Hugo',volM3:12,tipoMezcla:'Carpeta',temperatura:165,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-45',destino:'Av. Mariscal Santa Cruz'},
      {id:12,fecha:'2026-01-15',hora:'08:15',nBoleta:'3351',volqueta:'CV-02',conductor:'Bautista Llanos Ramiro',volM3:12,tipoMezcla:'Carpeta',temperatura:164,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-45',destino:'Av. Mariscal Santa Cruz'},
      {id:13,fecha:'2026-01-15',hora:'10:00',nBoleta:'3352',volqueta:'VH-39',conductor:'Chipana Ticona Nelson Fredy',volM3:12,tipoMezcla:'Carpeta',temperatura:162,planta:'Ciber',responsable:'INTECONS',codigoObra:'EMA-45',destino:'Av. Mariscal Santa Cruz'},
      {id:14,fecha:'2026-02-10',hora:'07:00',nBoleta:'3380',volqueta:'CV-03',conductor:'Pusarico Condori Jorge',volM3:8,tipoMezcla:'Bacheo',temperatura:158,planta:'OMIP',responsable:'DEMTV',codigoObra:'EMA-46',destino:'Sur Calle Mexico'},
      {id:15,fecha:'2026-02-10',hora:'09:30',nBoleta:'3381',volqueta:'VH-42',conductor:'Magarinos Loredo Jaime',volM3:8,tipoMezcla:'Bacheo',temperatura:157,planta:'OMIP',responsable:'DEMTV',codigoObra:'EMA-46',destino:'Sur Calle Mexico'},
      {id:16,fecha:'2026-03-12',hora:'07:00',nBoleta:'3420',volqueta:'CV-01',conductor:'Alanez Mercado Victor Hugo',volM3:10,tipoMezcla:'Carpeta',temperatura:160,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-47',destino:'Cazabaches Av. Landaeta'},
      {id:17,fecha:'2026-03-12',hora:'08:30',nBoleta:'3421',volqueta:'CV-02',conductor:'Bautista Llanos Ramiro',volM3:10,tipoMezcla:'Carpeta',temperatura:159,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-47',destino:'Cazabaches Av. Landaeta'},
      {id:18,fecha:'2026-03-12',hora:'10:15',nBoleta:'3422',volqueta:'VH-39',conductor:'Chipana Ticona Nelson Fredy',volM3:10,tipoMezcla:'Carpeta',temperatura:161,planta:'Ciber',responsable:'Victor 21',codigoObra:'EMA-47',destino:'Cazabaches Av. Landaeta'}
    ]);
  }
  if (DB.get('perdidas_config').length===0) {
    DB.set('perdidas_config',[{
      id:1,
      agregados_acopio_clima:1.5,agregados_carguo:0.5,
      ca_dilucion:0.3,ca_tambores:0.2,ca_trozado:0.1,
      encendido_agregado_m3:2.5,encendido_asfalto_ton:0.15,
      apagado_agregado_m3:1.5,apagado_asfalto_ton:0.1,
      total_agregados:2.0,total_ca:0.6,total_ciclo_m3:4.0,total_ciclo_ton:0.25
    }]);
  }
  if (DB.get('cotizaciones_ext').length===0) {
    DB.set('cotizaciones_ext',[
      {id:1,nro:'COT-EXT-001/2026',fecha:'2026-01-20',cliente:'Empresa Constructora Andes S.R.L.',ubicacion:'Av. Arce, zona Sopocachi',area:350,tipo:'ASFALTADO',precioBase:85,porcentaje:15,precioFinal:97.75,total:34212.50,estado:'Aprobada'},
      {id:2,nro:'COT-EXT-002/2026',fecha:'2026-02-05',cliente:'SOPAC S.A.',ubicacion:'Calle 21 de Calacoto',area:120,tipo:'BACHEO',precioBase:72,porcentaje:12,precioFinal:80.64,total:9676.80,estado:'Pendiente'},
      {id:3,nro:'COT-EXT-003/2026',fecha:'2026-02-18',cliente:'Ferroviaria Andina S.A.',ubicacion:'Av. Montes zona Central',area:200,tipo:'IMPRIMACION',precioBase:30,porcentaje:10,precioFinal:33.00,total:6600.00,estado:'En Revision'},
      {id:4,nro:'COT-EXT-004/2026',fecha:'2026-03-01',cliente:'UMSA',ubicacion:'Campus Universitario Cota Cota',area:580,tipo:'ASFALTADO',precioBase:85,porcentaje:15,precioFinal:97.75,total:56695.00,estado:'Aprobada'}
    ]);
  }
  if (DB.get('cotizaciones_gamlp').length===0) {
    DB.set('cotizaciones_gamlp',[
      {id:1,nro:'COT-GAMLP-001/2026',fecha:'2026-01-10',subalcaldia:'PERIFERICA',solicitante:'Sub Alcaldia Periferica',ubicacion:'Calle Tarapaca zona Villa Victoria',tipoCot:'PREVIA',area:480,subtotal:40800,iva:6120,total:46920,estado:'Aprobada'},
      {id:2,nro:'COT-GAMLP-002/2026',fecha:'2026-01-25',subalcaldia:'CENTRO',solicitante:'Sub Alcaldia Centro',ubicacion:'Av. 6 de Agosto zona Central',tipoCot:'FINAL',area:320,subtotal:36160,iva:5424,total:41584,estado:'Enviada'},
      {id:3,nro:'COT-GAMLP-003/2026',fecha:'2026-02-12',subalcaldia:'SUR',solicitante:'Sub Alcaldia Sur',ubicacion:'Calle Mexico zona Achumani',tipoCot:'PREVIA',area:600,subtotal:43200,iva:6480,total:49680,estado:'En Revision'},
      {id:4,nro:'COT-GAMLP-004/2026',fecha:'2026-03-05',subalcaldia:'MAX PAREDES',solicitante:'Sub Alcaldia Max Paredes',ubicacion:'Calle Tumusla zona Garita de Lima',tipoCot:'PREVIA',area:250,subtotal:21250,iva:3187.5,total:24437.5,estado:'Pendiente'}
    ]);
  }
  if (DB.get('horas_extra').length===0) {
    DB.set('horas_extra',[
      {id:1,fecha:'2026-08-15',ci:'2456521 LP',nombre:'Magarinos Loredo Jaime Eduardo',grupo:'ASFALTO 1',trabajo:'ORDEN DE DESPACHO 236/2026',tipo:'C',permanencia:'PERMANENTE',horaSalida:'07:00',horaExtra:'16:00',totalHoras:9,lv:9,sd:0,nocturno:0,totalFinal:9,periodo:'21/07/2026-20/08/2026'},
      {id:2,fecha:'2026-08-15',ci:'4910970 LP',nombre:'Fernandez Baldivieso Marcelo German',grupo:'CHOFER GT',trabajo:'APOYO FERIA CIRCULAR',tipo:'C',permanencia:'PERMANENTE',horaSalida:'08:00',horaExtra:'13:30',totalHoras:5.5,lv:5.3,sd:0,nocturno:0,totalFinal:5.3,periodo:'21/07/2026-20/08/2026'},
      {id:3,fecha:'2026-08-15',ci:'4821217 LP',nombre:'Pusarico Condori Jorge',grupo:'ASFALTO 1',trabajo:'ORDEN DE DESPACHO 236/2026',tipo:'C',permanencia:'PERMANENTE',horaSalida:'07:00',horaExtra:'16:00',totalHoras:9,lv:9,sd:0,nocturno:0,totalFinal:9,periodo:'21/07/2026-20/08/2026'},
      {id:4,fecha:'2026-08-15',ci:'4244861 LP',nombre:'Alanez Mercado Victor Hugo',grupo:'PLANTA ASFALTADORA',trabajo:'ORDEN DE DESPACHO 236/2026',tipo:'C',permanencia:'PERMANENTE',horaSalida:'07:00',horaExtra:'17:30',totalHoras:10.5,lv:10.3,sd:0,nocturno:0,totalFinal:10.3,periodo:'21/07/2026-20/08/2026'},
      {id:5,fecha:'2026-08-15',ci:'6171292 LP',nombre:'Chipana Ticona Nelson Fredy',grupo:'PLANTA ASFALTADORA',trabajo:'ORDEN DE DESPACHO 236/2026',tipo:'C',permanencia:'PERMANENTE',horaSalida:'07:00',horaExtra:'18:00',totalHoras:11,lv:11,sd:0,nocturno:0,totalFinal:11,periodo:'21/07/2026-20/08/2026'}
    ]);
  }
  if (DB.get('boletas').length===0) {
    DB.set('boletas',[
      {id:1,nombre:'ALIAGA GUARACHI JOSE ANTONIO',ci:'6731277 L.P.',area:'GERENCIA TECNICA',cargo:'TECNICO DE COSTEO DE OBRAS',item:57,tipo:'Hrs. Adm.',fecha:'2026-07-22',horaDesde:'15:00',horaHasta:'16:00',dias:'',observaciones:'UNA HORA ADMINISTRATIVA SEGUN RIT',estado:'Aprobada',hrsAdmUsadas:1,hrsAdmDisp:2,diasAdmUsados:0,diasAdmDisp:2},
      {id:2,nombre:'QUISPE ALEGRIA JUAN CLIMACO',ci:'2564997 LP',area:'BACHEO 1',cargo:'OBRERO ESPECIALIZADO',item:42,tipo:'Medico',fecha:'2026-08-10',horaDesde:'',horaHasta:'',dias:'2026-08-10',observaciones:'Control medico CAJA CORDES',estado:'Aprobada',hrsAdmUsadas:0,hrsAdmDisp:2,diasAdmUsados:0,diasAdmDisp:2},
      {id:3,nombre:'BAUTISTA LLANOS RAMIRO',ci:'3386438 LP',area:'PLANTA ASFALTADORA',cargo:'OPERADOR PLANTA ASFALTICA',item:23,tipo:'Particular',fecha:'2026-08-20',horaDesde:'',horaHasta:'',dias:'2026-08-20',observaciones:'Asunto personal',estado:'Pendiente',hrsAdmUsadas:0,hrsAdmDisp:2,diasAdmUsados:1,diasAdmDisp:2}
    ]);
  }
  if (DB.get('precios_gamlp').length===0) {
    DB.set('precios_gamlp',[
      {id:1,codigo:'MA-01',descripcion:'Mezcla Asfaltica Densa MD-12',unidad:'TON',precio:1250.00,vigencia:'2026-01-01'},
      {id:2,codigo:'MA-02',descripcion:'Mezcla Asfaltica Densa MD-19',unidad:'TON',precio:1220.00,vigencia:'2026-01-01'},
      {id:3,codigo:'AS-01',descripcion:'Asfaltado (tendido y compactado)',unidad:'M2',precio:85.00,vigencia:'2026-01-01'},
      {id:4,codigo:'BA-01',descripcion:'Bacheo Mezcla Asfaltica',unidad:'M2',precio:72.00,vigencia:'2026-01-01'},
      {id:5,codigo:'IM-01',descripcion:'Imprimacion con MC-30',unidad:'M2',precio:28.00,vigencia:'2026-01-01'},
      {id:6,codigo:'CV-01',descripcion:'Vaciado de Cuneta (hormigon)',unidad:'ML',precio:145.00,vigencia:'2026-01-01'},
      {id:7,codigo:'OC-01',descripcion:'Obras Civiles (camara)',unidad:'PZA',precio:380.00,vigencia:'2026-01-01'}
    ]);
  }
}

  if (DB.get('trabajadores').length===0) {
    DB.set('trabajadores',[
      {ci:'4749729 LP',nombre:'Aguilar Moises',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6105572 LP',nombre:'Aguirre Alconini Evert Claudio',grupo:'PLANTA CHANCADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4244861 LP',nombre:'Alanez  Mercado Victor Hugo',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6055423 LP',nombre:'Alave Achacayo Pablo Secundino',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6731277 LP',nombre:'Aliaga Guarachi Jose Antonio',grupo:'COMERCIALIZACION',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2691364 LP',nombre:'Antelo Gutierrez Felix',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2232861 LP',nombre:'Apaza  De Pilco  Justa',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6846400 LP',nombre:'Aracayo Saavedra  Julio Cesar',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4307412 LP',nombre:'Aro Mamani  Martin',grupo:'IMPRIMADOR',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9120622 LP',nombre:'Arpita Sea Richard',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4276763 LP',nombre:'Arteaga Flores  Norah Maxima',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8313018 LP',nombre:'Aruquipa Castillo O\'Brahiam Gilmar',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8359377 LP',nombre:'Avendaño Arratia Juan Carlos',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2541278 LP',nombre:'Balderrama Vda.de Tiñini Mercedes',grupo:'AVANZADA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4820383 LP',nombre:'Baltazar Chauca Roman Elias',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3386438 LP',nombre:'Bautista  Llanos  Ramiro',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6056141 LP',nombre:'Bustos Laime Yamil',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4853710 LP',nombre:'Cachi Choque Ivonne Maria',grupo:'SEÑALIZACION 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9171851 LP',nombre:'Cala Mamani Santos Douglas',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9204623 LP',nombre:'Canaviri Plata Freddy',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2059789 LP',nombre:'Carani Cañizaca Elbio',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6740095 LP',nombre:'Chavez Chura Salome',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6171292 LP',nombre:'Chipana  Ticona Nelson Fredy',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2718570 LP',nombre:'Chipana Quispe Bernardino',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4333823 LP',nombre:'Choquehuanca Chiara Natalio Manuel',grupo:'MTTO Y TRANSPORTE',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3357945 LP',nombre:'Chuquimia  Lopez  Faustina',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4336903 LP',nombre:'Chura  Ramirez Alberto',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2358662 LP',nombre:'Chura Condori Sebastiana',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9118924 LP',nombre:'Coarite Chambi Eusebio Raul',grupo:'TOPOGRAFIA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8345345 LP',nombre:'Condori Apaza Guido Efrain',grupo:'PLANTA CHANCADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'441286 LP',nombre:'Condori Limachi Julio',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4324597 LP',nombre:'Condori Lopez Lucia',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6843578 LP',nombre:'Coronel Aruquipa Fernando',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9877868 LP',nombre:'Cruz Condori German',grupo:'AVANZADA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2629844 LP',nombre:'Cruz Lobo Rosso Rosendo',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9974856 LP',nombre:'Cutile Acarapi Mario Miguel',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4826853 LP',nombre:'Dueñas Quintanilla Iber Felix',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6029166 LP',nombre:'Espinoza Huanca Justo Rene',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4910970 LP',nombre:'Fernandez Baldivieso Marcelo German',grupo:'CHOFER GT',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3339547 LP',nombre:'Flores Segales Juan Pedro',grupo:'SEÑALIZACION 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2097425 LP',nombre:'Gomez Quispe Juan Pastor',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2173725 LP',nombre:'Gutierrez Mamani  Prudencio Felipe',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2454291 LP',nombre:'Huanca Flores de Lucero Angelica',grupo:'SEÑALIZACION 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2531032 LP',nombre:'Huayta Nina Isidoro',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8346810 LP',nombre:'Ibañez Tiñini Roberto Freddy',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4332001 LP',nombre:'Jumpiri Gutierrez Juana',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8283381 LP',nombre:'Larico Condori Jorge Gregorio',grupo:'AVANZADA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2471184 LP',nombre:'Laruta Flores Victor',grupo:'PLANTA CHANCADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4867771 LP',nombre:'Laura Callisaya Eusebio Anastacio',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4311724 LP',nombre:'Laura Quispe Luis Felix',grupo:'CALDERISTA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4843190 LP',nombre:'Leandro Castillo Pedro',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4259973 LP',nombre:'Limachi Limachi Leandro Vicente',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6983946 LP',nombre:'Lopez Pacheco  Gregorio',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2707167 LP',nombre:'Lopez Veizaga de Colomo Maria Isabel',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8366366 LP',nombre:'Luque Mayta Dario Rodrigo',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4301043 LP',nombre:'Machicado Mendoza Victoria Virginia',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2268829 LP',nombre:'Macuchapi Huanca Pastor',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2456521 LP',nombre:'Magariños Loredo Jaime Eduardo',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'1289730 PT',nombre:'Maldonado Espinoza Jorge',grupo:'SEÑALIZACION 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4813989 LP',nombre:'Mamani Calderon Franz',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'10913958 LP',nombre:'Mamani Condori Ivan Rodrigo',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4276435 LP',nombre:'Mamani De Carhuani Jacinta',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4904971 LP',nombre:'Mamani Mamani  Fidel',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4786853 LP',nombre:'Mamani Quispe Edgar Bernabe',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3435572 LP',nombre:'Maquera vda. de Quenta Barbara',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4330906 LP',nombre:'Mariscal Mendez Veimar Alejandro',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2469172 LP',nombre:'Medrano Murga Angel',grupo:'AVANZADA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9883533 LP',nombre:'Mendoza Chachahuayna Grover',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6744618 LP',nombre:'Merma Garcia  Santos Ricardo',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3429580 LP',nombre:'Mollericona Saca Felipe',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2474334 LP',nombre:'Montes Jimenez Ernesto Ramiro',grupo:'TOPOGRAFIA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8352939 LP',nombre:'Nina Quenta Daniel',grupo:'CALDERISTA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6167581 LP',nombre:'Nina Vargas Frank Reynaldo',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'5474897 LP',nombre:'Nina Villca Pablo',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4878631 LP',nombre:'Oblitas Mamani  Francisca',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2378657 LP',nombre:'Ortiz Ortega Simon',grupo:'AVANZADA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4853465 LP',nombre:'Osco  Condori Jorge Raul',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4974265 LP',nombre:'Pacheco Conde Victor Nicolas',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8439592 LP',nombre:'Pareja Mirabal Rogelio Abraham',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6764939 LP',nombre:'Paye Marca Reynaldo',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'7058937 LP',nombre:'Perez Quispe Ismael Angel',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9893019 LP',nombre:'Pomar Mamani Doris',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4453922 CBBA',nombre:'Pozo Cortez Erick Wilder',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4821217 LP',nombre:'Pusarico Condori Jorge',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4271889 LP',nombre:'Quilla Corso Gonzalo',grupo:'SEÑALIZACION 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2397641 LP',nombre:'Quisbert Monasterios  Carlos Damian',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4298249 LP',nombre:'Quispe  Avendaño Juana',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6850160 LP',nombre:'Quispe  Marco Antonio',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2564997 LP',nombre:'Quispe Alegria Juan Climaco',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6022501 LP',nombre:'Quispe Ancalli Marcos Ancelmo',grupo:'MTTO Y TRANSPORTE',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6172045 LP',nombre:'Quispe Chura Santos',grupo:'MTTO Y TRANSPORTE',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4930896 LP',nombre:'Quispe Palluca Max Richard',grupo:'SEÑALIZACION 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'7052972 LP',nombre:'Quispe Quellca Julio Cesar',grupo:'CALDERISTA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6173313 LP',nombre:'Quispe Quispe Isaac Andres',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'7041141 LP',nombre:'Ramos Ururi Juan Carlos',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6943922 LP',nombre:'Reas Mamani Ruben',grupo:'SEÑALIZACION 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3480877 LP',nombre:'Riveros Quispe  Inocencia',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2708685 LP',nombre:'Rodriguez Quispe  Angel Gumercindo',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'8319158 LP',nombre:'Rojas Callisaya Jhonny',grupo:'ASFALTO 3',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6038016 LP',nombre:'Rojas Ortega Armando',grupo:'AYU. CARRO IMPRIMADOR',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6019190 LP',nombre:'Ruiz Mamani Freddy',grupo:'OBRAS COMPLEMENTARIAS',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9093330 LP',nombre:'Salinas Condori Rodrigo',grupo:'BACHEO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2625595 LP',nombre:'Siles  Homero Porfirio',grupo:'TALLER PINTURA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4924441 LP',nombre:'Tapia  Verastegui Dino Javier Humberto',grupo:'MTTO Y TRANSPORTE',cargo:'',permanencia:'PERMANENTE'},
      {ci:'2150472 LP',nombre:'Ticona Cruz Justa Rufina',grupo:'SEÑALIZACION 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9077215 LP',nombre:'Ticona Limachi Jose Luis',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6765634 LP',nombre:'Tola Estrada Edgar',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'3415808 LP',nombre:'Tola Ramos Oscar',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'6023274 LP',nombre:'Torres Condori Emilio',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'5473652 LP',nombre:'Torrez Yaja Amilcar',grupo:'PLANTA ASFALTADORA',cargo:'',permanencia:'PERMANENTE'},
      {ci:'9129146 LP',nombre:'Valdez Ramos Jorge Nelson',grupo:'ASFALTO 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4777524 LP',nombre:'Valencia  Conde Javier Cristobal',grupo:'SEÑALIZACION 1',cargo:'',permanencia:'PERMANENTE'},
      {ci:'11104967 LP',nombre:'Valero Paco Roly Natim',grupo:'ASFALTO 2',cargo:'',permanencia:'PERMANENTE'},
      {ci:'4303852 LP',nombre:'Limachi Quispe Luis Eusebio',grupo:'MTTO Y TRANSPORTE',cargo:'',permanencia:'PERMANENTE'}
    ]);
  }
  if (DB.get('feriados').length===0) {
    DB.set('feriados',[
      {id:1,fecha:'2026-01-01',nombre:'Año Nuevo',tipo:'nacional'},
      {id:2,fecha:'2026-01-22',nombre:'Día del Estado Plurinacional de Bolivia',tipo:'nacional'},
      {id:3,fecha:'2026-02-16',nombre:'Feriado de Carnaval',tipo:'nacional'},
      {id:4,fecha:'2026-02-17',nombre:'Carnaval',tipo:'nacional'},
      {id:5,fecha:'2026-04-02',nombre:'Jueves Santo',tipo:'nacional'},
      {id:6,fecha:'2026-04-03',nombre:'Viernes Santo',tipo:'nacional'},
      {id:7,fecha:'2026-05-01',nombre:'Día del Trabajo',tipo:'nacional'},
      {id:8,fecha:'2026-06-11',nombre:'Corpus Christi',tipo:'nacional'},
      {id:9,fecha:'2026-06-21',nombre:'Año Nuevo Andino Amazónico — Willka Kuti',tipo:'nacional'},
      {id:10,fecha:'2026-07-16',nombre:'Día de La Paz (Departamental)',tipo:'departamental'},
      {id:11,fecha:'2026-08-06',nombre:'Día de la Independencia de Bolivia',tipo:'nacional'},
      {id:12,fecha:'2026-08-07',nombre:'Independencia (asueto)',tipo:'nacional'},
      {id:13,fecha:'2026-11-02',nombre:'Día de los Difuntos',tipo:'nacional'},
      {id:14,fecha:'2026-12-25',nombre:'Navidad',tipo:'nacional'},
      {id:15,fecha:'2025-01-01',nombre:'Año Nuevo',tipo:'nacional'},
      {id:16,fecha:'2025-01-22',nombre:'Día del Estado Plurinacional',tipo:'nacional'},
      {id:17,fecha:'2025-03-03',nombre:'Feriado de Carnaval',tipo:'nacional'},
      {id:18,fecha:'2025-03-04',nombre:'Carnaval',tipo:'nacional'},
      {id:19,fecha:'2025-04-17',nombre:'Jueves Santo',tipo:'nacional'},
      {id:20,fecha:'2025-04-18',nombre:'Viernes Santo',tipo:'nacional'},
      {id:21,fecha:'2025-05-01',nombre:'Día del Trabajo',tipo:'nacional'},
      {id:22,fecha:'2025-06-19',nombre:'Corpus Christi',tipo:'nacional'},
      {id:23,fecha:'2025-06-21',nombre:'Año Nuevo Andino — Willka Kuti',tipo:'nacional'},
      {id:24,fecha:'2025-07-16',nombre:'Día de La Paz (Departamental)',tipo:'departamental'},
      {id:25,fecha:'2025-08-06',nombre:'Día de la Independencia',tipo:'nacional'},
      {id:26,fecha:'2025-11-02',nombre:'Día de los Difuntos',tipo:'nacional'},
      {id:27,fecha:'2025-12-25',nombre:'Navidad',tipo:'nacional'},
    ]);
  }

function formatDate(d){ if(!d) return '-'; const dt=new Date(d+'T00:00:00'); return dt.toLocaleDateString('es-BO',{day:'2-digit',month:'2-digit',year:'numeric'}); }
function formatCurrency(v){ if(v==null||isNaN(v)) return 'Bs. 0.00'; return 'Bs. '+Number(v).toLocaleString('es-BO',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function formatNumber(v,d=2){ if(v==null||isNaN(v)) return '0'; return Number(v).toLocaleString('es-BO',{minimumFractionDigits:d,maximumFractionDigits:d}); }
function today(){ return new Date().toISOString().split('T')[0]; }
function escHtml(s){ return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

function getStatusBadge(est){
  const map={'Completado':'success','Aprobada':'success','Cerrado':'success','Enviada':'success','En Ejecucion':'info','En Revision':'info','Abierto':'info','Planificado':'warning','Pendiente':'warning','Rechazada':'danger'};
  const cls=map[est]||'secondary';
  return `<span class="badge badge-${cls}">${escHtml(est)}</span>`;
}

function renderSidebar(activePage){
  const user=AUTH.current()||{name:'Usuario',role:'Sin rol'};
  const initial=user.name.charAt(0).toUpperCase();
  const nav=[
    {id:'dashboard',icon:'📊',label:'Dashboard',href:'dashboard.html'},
    {section:'REGISTROS OPERATIVOS'},
    {id:'obras',icon:'🏗️',label:'Registro de Obras',href:'obras.html'},
    {id:'produccion',icon:'🏭',label:'Produccion Asfaltica',href:'produccion.html'},
    {id:'horas-extra',icon:'⏱️',label:'Horas Extra',href:'horas-extra.html'},
    {id:'boletas',icon:'📋',label:'Boletas de Salida',href:'boletas-salida.html'},
    {section:'COTIZACIONES'},
    {id:'cot-ext',icon:'📄',label:'Cotiz. Externos',href:'cotizaciones-externos.html'},
    {id:'cot-gamlp',icon:'🏛️',label:'Cotiz. GAMLP',href:'cotizaciones-gamlp.html'},
    {section:'CONFIGURACION'},
    {id:'personal',icon:'👷',label:'Personal Operativo',href:'#',onclick:'openPersonalPanel()'},
    {id:'precios',icon:'💰',label:'Precios y Tarifas',href:'precios.html'}
  ];
  let h=`<div class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="sidebar-logo-text">
        <span class="logo-ema">ema</span><span class="logo-vias">vias</span>
        <span class="logo-sub">Empresa Municipal de Asfaltos y Vias</span>
      </div>
    </div>
    <div class="sidebar-user">
      <div class="user-avatar">${initial}</div>
      <div><div class="user-name">${escHtml(user.name)}</div><div class="user-role">${escHtml(user.role)}</div></div>
    </div><nav class="sidebar-nav">`;
  nav.forEach(n=>{
    if(n.section){ h+=`<div class="nav-section-title">${n.section}</div>`; }
    else {
      const oc=n.onclick?` onclick="event.preventDefault();${n.onclick}"`:'';
      h+=`<a href="${n.href}"${oc} class="nav-item${activePage===n.id?' active':''}"><span class="nav-icon">${n.icon}</span>${escHtml(n.label)}</a>`;
    }
  });
  h+=`</nav><div class="sidebar-footer"><button class="btn-logout" onclick="AUTH.logout()">🚪 Cerrar Sesion</button></div></div>`;
  return h;
}

function renderTopbar(title,subtitle){
  const d=new Date().toLocaleDateString('es-BO',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  return `<div class="topbar">
    <div class="topbar-left">
      <button class="btn-hamburger" onclick="document.getElementById('sidebar').classList.toggle('open')">☰</button>
      <div><div class="topbar-title">${title}</div>${subtitle?`<div class="topbar-subtitle">${subtitle}</div>`:''}</div>
    </div>
    <div class="topbar-right"><span class="badge-date">📅 ${d}</span></div>
  </div>`;
}

function toast(msg,type='info'){
  let c=document.getElementById('toast-container');
  if(!c){c=document.createElement('div');c.id='toast-container';c.className='toast-container';document.body.appendChild(c);}
  const icons={success:'✅',error:'❌',info:'ℹ️',warning:'⚠️'};
  const t=document.createElement('div'); t.className=`toast ${type}`;
  t.innerHTML=`<span>${icons[type]||'ℹ️'}</span><span>${escHtml(msg)}</span>`;
  c.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(100%)';setTimeout(()=>t.remove(),300);},3500);
}

function exportCSV(data,filename,columns){
  const header=columns.map(c=>`"${c.label}"`).join(',');
  const rows=data.map(row=>columns.map(c=>{let v=row[c.key]!=null?row[c.key]:'';return `"${String(v).replace(/"/g,'""')}"`;}).join(','));
  const csv='﻿'+[header,...rows].join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  toast('Exportacion completada: '+filename,'success');
}


/* ======================== EXPORT XLSX ESTILIZADO ======================== */
function _xlsxReady(cb){
  if(window.XLSX&&window.XLSX.utils&&window.XLSX.utils.aoa_to_sheet){cb();return;}
  const s=document.createElement('script');
  s.src='js/xlsx-js-style.min.js';
  s.onload=cb;
  s.onerror=function(){toast('No se pudo cargar la librería Excel','error');};
  document.head.appendChild(s);
}

function exportXLSX(data, reportTitle, filename, columns){
  _xlsxReady(function(){
    try{
      const RED='8B1A1A',RED2='A52A2A',WHITE='FFFFFF';
      const now=new Date();
      const dateStr=now.toLocaleDateString('es-BO',{year:'numeric',month:'long',day:'numeric'});
      const nc=columns.length;

      function mkBorder(rgb){
        const b={style:'thin',color:{rgb:rgb||'CCBBBB'}};
        return{top:b,bottom:b,left:b,right:b};
      }
      function C(v,s){return{v:(v==null?'':v),t:(typeof v==='number'?'n':'s'),s:s};}

      const sTitle={fill:{patternType:'solid',fgColor:{rgb:RED}},
        font:{bold:true,color:{rgb:WHITE},name:'Arial',sz:14},
        alignment:{horizontal:'center',vertical:'center',wrapText:false}};
      const sSub={fill:{patternType:'solid',fgColor:{rgb:RED2}},
        font:{bold:false,color:{rgb:WHITE},name:'Arial',sz:9},
        alignment:{horizontal:'center',vertical:'center'}};
      const sGap={fill:{patternType:'solid',fgColor:{rgb:'6B1414'}},
        font:{color:{rgb:'6B1414'},sz:4}};
      const sHead={fill:{patternType:'solid',fgColor:{rgb:RED}},
        font:{bold:true,color:{rgb:WHITE},name:'Arial',sz:10},
        alignment:{horizontal:'center',vertical:'center',wrapText:true},
        border:mkBorder('8B1A1A')};
      const sEven={fill:{patternType:'solid',fgColor:{rgb:WHITE}},
        font:{name:'Arial',sz:10},border:mkBorder('E0CCCC')};
      const sOdd={fill:{patternType:'solid',fgColor:{rgb:'FDF5F5'}},
        font:{name:'Arial',sz:10},border:mkBorder('E0CCCC')};
      const sEvenR={...sEven,alignment:{horizontal:'right'}};
      const sOddR={...sOdd,alignment:{horizontal:'right'}};

      const wsData=[];
      // Fila 1: nombre empresa
      wsData.push([C('EMAVIAS  —  EMPRESA MUNICIPAL DE ASFALTO Y VÍAS',sTitle),
        ...Array(nc-1).fill(C('',sTitle))]);
      // Fila 2: subtítulo
      wsData.push([C('SISTEMA DE GESTIÓN ADMINISTRATIVA   ·   '+reportTitle.toUpperCase()+'   ·   '+dateStr,sSub),
        ...Array(nc-1).fill(C('',sSub))]);
      // Fila 3: separador fino
      wsData.push(Array(nc).fill(C('',sGap)));
      // Fila 4: encabezados de columna
      wsData.push(columns.map(col=>C(col.label,sHead)));
      // Filas de datos
      data.forEach((row,ri)=>{
        const odd=ri%2===1;
        wsData.push(columns.map(col=>{
          const v=row[col.key]!=null?row[col.key]:'';
          const num=typeof v==='number';
          return C(num?v:String(v), odd?(num?sOddR:sOdd):(num?sEvenR:sEven));
        }));
      });
      // Fila total (si hay columnas numéricas)
      const numCols=columns.filter((_,i)=>data.some(r=>typeof r[columns[i].key]==='number'));
      if(numCols.length&&data.length){
        const sTot={fill:{patternType:'solid',fgColor:{rgb:'F5EAEA'}},
          font:{bold:true,name:'Arial',sz:10},border:mkBorder('8B1A1A'),
          alignment:{horizontal:'right'}};
        const sTotL={...sTot,alignment:{horizontal:'left'}};
        wsData.push(columns.map((col,ci)=>{
          if(ci===0) return C('TOTALES',sTotL);
          const v=typeof data[0][col.key]==='number'
            ?+data.reduce((s,r)=>s+(Number(r[col.key])||0),0).toFixed(2)
            :'';
          return C(v,sTot);
        }));
      }

      const ws=XLSX.utils.aoa_to_sheet(wsData);
      ws['!merges']=[
        {s:{r:0,c:0},e:{r:0,c:nc-1}},
        {s:{r:1,c:0},e:{r:1,c:nc-1}},
        {s:{r:2,c:0},e:{r:2,c:nc-1}},
      ];
      ws['!cols']=columns.map(col=>({wch:Math.max((col.label||'').length+2,13)}));
      ws['!rows']=[{hpt:28},{hpt:18},{hpt:5},{hpt:22}];

      const wb=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb,ws,reportTitle.slice(0,31));
      XLSX.writeFile(wb,filename);
      toast('Excel exportado: '+filename,'success');
    }catch(err){
      console.error('exportXLSX:',err);
      toast('Error al exportar: '+err.message,'error');
    }
  });
}
/* ======================== END EXPORT XLSX ======================== */

function parseCSVLine(line){
  const result=[];let cur='';let inQ=false;
  for(let i=0;i<line.length;i++){
    if(line[i]==='"'){inQ=!inQ;}
    else if(line[i]===','&&!inQ){result.push(cur.trim());cur='';}
    else{cur+=line[i];}
  }
  result.push(cur.trim());return result;
}

function importCSV(file,columns,onSuccess){
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const text=e.target.result.replace(/^﻿/,'');
      const lines=text.split('\n').filter(l=>l.trim());
      if(lines.length<2){toast('Archivo vacio o sin datos','error');return;}
      const records=[];
      for(let i=1;i<lines.length;i++){
        const vals=parseCSVLine(lines[i]);
        if(vals.length<2) continue;
        const rec={id:Date.now()+i};
        columns.forEach((c,idx)=>{if(c.key!=='id') rec[c.key]=vals[idx]!==undefined?vals[idx]:'';});
        records.push(rec);
      }
      onSuccess(records);
      toast(`Importados ${records.length} registros`,'success');
    }catch(ex){toast('Error: '+ex.message,'error');}
  };
  reader.readAsText(file,'UTF-8');
}


/* ======================== PERSONAL PANEL (global) ======================== */
function openPersonalPanel(){
  let panel=document.getElementById('__personalPanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='__personalPanel';
    panel.innerHTML=`
<div id="__ppOverlay" onclick="closePersonalPanel()" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2000"></div>
<div id="__ppDrawer" style="display:none;position:fixed;top:0;right:0;width:min(560px,100vw);height:100vh;background:#fff;z-index:2001;box-shadow:-4px 0 30px rgba(0,0,0,.25);overflow-y:auto;flex-direction:column">
  <div style="background:linear-gradient(135deg,#8B1A1A,#6B1414);color:#fff;padding:16px 20px;display:flex;align-items:center;gap:12px;position:sticky;top:0;z-index:1">
    <span style="font-size:1.5rem">👷</span>
    <div><div style="font-weight:700;font-size:1.05rem">Personal Operativo</div><div style="font-size:.8rem;opacity:.8" id="__ppCount"></div></div>
    <button onclick="closePersonalPanel()" style="margin-left:auto;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;line-height:1">×</button>
  </div>
  <div style="padding:12px 16px;border-bottom:1px solid #eee;display:flex;gap:8px;align-items:center">
    <input id="__ppSearch" type="text" placeholder="Buscar CI, nombre, grupo..." oninput="__ppRender()" style="flex:1;padding:7px 10px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem">
    <button onclick="__ppOpenForm()" style="background:#8B1A1A;color:#fff;border:none;padding:7px 14px;border-radius:6px;cursor:pointer;font-size:.88rem;white-space:nowrap">➕ Agregar</button>
  </div>
  <div id="__ppList" style="padding:0;flex:1"></div>
  <!-- Form add/edit -->
  <div id="__ppForm" style="display:none;position:sticky;bottom:0;background:#f8f9fa;border-top:2px solid #8B1A1A;padding:16px">
    <div style="font-weight:700;color:#8B1A1A;margin-bottom:10px" id="__ppFormTitle">➕ Nuevo Trabajador</div>
    <input type="hidden" id="__ppFormId">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
      <div><label style="font-size:.78rem;font-weight:600;color:#555;display:block;margin-bottom:3px">C.I. *</label>
        <input id="__ppFCi" type="text" placeholder="Ej: 1234567 LP" style="width:100%;padding:7px 9px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem;box-sizing:border-box"></div>
      <div><label style="font-size:.78rem;font-weight:600;color:#555;display:block;margin-bottom:3px">Tipo</label>
        <select id="__ppFPerm" style="width:100%;padding:7px 9px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem;box-sizing:border-box">
          <option value="PERMANENTE">Permanente</option><option value="EVENTUAL">Eventual</option>
        </select></div>
    </div>
    <div style="margin-bottom:8px"><label style="font-size:.78rem;font-weight:600;color:#555;display:block;margin-bottom:3px">Apellidos y Nombre *</label>
      <input id="__ppFNombre" type="text" placeholder="Ej: Mamani Quispe Juan Carlos" style="width:100%;padding:7px 9px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem;box-sizing:border-box"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div><label style="font-size:.78rem;font-weight:600;color:#555;display:block;margin-bottom:3px">Grupo</label>
        <input id="__ppFGrupo" type="text" list="__ppGrupoList" placeholder="Ej: ASFALTO 1" style="width:100%;padding:7px 9px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem;box-sizing:border-box">
        <datalist id="__ppGrupoList"></datalist></div>
      <div><label style="font-size:.78rem;font-weight:600;color:#555;display:block;margin-bottom:3px">Cargo</label>
        <input id="__ppFCargo" type="text" placeholder="Ej: Chofer" style="width:100%;padding:7px 9px;border:1.5px solid #ddd;border-radius:6px;font-size:.88rem;box-sizing:border-box"></div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="__ppCancelForm()" style="flex:1;background:none;border:1.5px solid #ccc;color:#555;padding:8px;border-radius:6px;cursor:pointer;font-size:.88rem">Cancelar</button>
      <button onclick="__ppSave()" style="flex:2;background:#8B1A1A;color:#fff;border:none;padding:8px;border-radius:6px;cursor:pointer;font-size:.88rem;font-weight:600">💾 Guardar</button>
    </div>
  </div>
</div>`;
    document.body.appendChild(panel);
  }
  document.getElementById('__ppOverlay').style.display='block';
  const dr=document.getElementById('__ppDrawer');
  dr.style.display='flex';
  __ppRender();
  // populate grupo datalist
  const grupos=[...new Set(DB.get('trabajadores').map(w=>w.grupo).filter(Boolean))].sort();
  document.getElementById('__ppGrupoList').innerHTML=grupos.map(g=>`<option value="${escHtml(g)}">`).join('');
}
function closePersonalPanel(){
  const ov=document.getElementById('__ppOverlay');
  const dr=document.getElementById('__ppDrawer');
  if(ov) ov.style.display='none';
  if(dr) dr.style.display='none';
}
function __ppRender(){
  const q=(document.getElementById('__ppSearch')||{value:''}).value.toLowerCase();
  const workers=DB.get('trabajadores').filter(w=>!q||`${w.ci} ${w.nombre} ${w.grupo}`.toLowerCase().includes(q));
  document.getElementById('__ppCount').textContent=`${workers.length} trabajadores`;
  const list=document.getElementById('__ppList');
  if(!workers.length){
    list.innerHTML='<div style="padding:32px;text-align:center;color:#aaa">No se encontraron trabajadores</div>';
    return;
  }
  list.innerHTML=workers.map(w=>`
    <div style="padding:10px 16px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:10px">
      <div style="width:36px;height:36px;background:#f0f0f0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">👤</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(w.nombre)}</div>
        <div style="font-size:.78rem;color:#888">${escHtml(w.ci)} · <span style="color:#2c5fa8">${escHtml(w.grupo||'—')}</span></div>
      </div>
      <span style="font-size:.7rem;padding:2px 7px;border-radius:8px;background:${w.permanencia==='PERMANENTE'?'#d4edda':'#fff3cd'};color:${w.permanencia==='PERMANENTE'?'#155724':'#856404'};white-space:nowrap">${w.permanencia==='PERMANENTE'?'Perm':'Eventual'}</span>
      <button onclick="__ppOpenForm(${w.id})" style="background:none;border:none;cursor:pointer;font-size:1rem;padding:3px" title="Editar">✏️</button>
      <button onclick="__ppDelete(${w.id})" style="background:none;border:none;cursor:pointer;font-size:1rem;padding:3px;color:#c00" title="Eliminar">🗑️</button>
    </div>`).join('');
}
function __ppOpenForm(id){
  document.getElementById('__ppForm').style.display='block';
  document.getElementById('__ppFormId').value=id||'';
  document.getElementById('__ppFormTitle').textContent=id?'✏️ Editar Trabajador':'➕ Nuevo Trabajador';
  if(id){
    const w=DB.get('trabajadores').find(x=>x.id===id)||{};
    document.getElementById('__ppFCi').value=w.ci||'';
    document.getElementById('__ppFNombre').value=w.nombre||'';
    document.getElementById('__ppFGrupo').value=w.grupo||'';
    document.getElementById('__ppFCargo').value=w.cargo||'';
    document.getElementById('__ppFPerm').value=w.permanencia||'PERMANENTE';
  } else {
    ['__ppFCi','__ppFNombre','__ppFGrupo','__ppFCargo'].forEach(i=>document.getElementById(i).value='');
    document.getElementById('__ppFPerm').value='PERMANENTE';
  }
  setTimeout(()=>document.getElementById('__ppFCi').focus(),80);
}
function __ppCancelForm(){document.getElementById('__ppForm').style.display='none';}
function __ppSave(){
  const ci=document.getElementById('__ppFCi').value.trim();
  const nombre=document.getElementById('__ppFNombre').value.trim();
  const grupo=document.getElementById('__ppFGrupo').value.trim();
  const cargo=document.getElementById('__ppFCargo').value.trim();
  const permanencia=document.getElementById('__ppFPerm').value;
  const editId=document.getElementById('__ppFormId').value;
  if(!ci){toast('Ingrese el C.I.','error');return;}
  if(!nombre){toast('Ingrese el nombre','error');return;}
  const workers=DB.get('trabajadores');
  if(editId){
    const id=parseInt(editId);
    if(workers.some(w=>w.id!==id&&w.ci===ci)){toast('C.I. ya registrado','error');return;}
    const idx=workers.findIndex(w=>w.id===id);
    if(idx>=0) workers[idx]={...workers[idx],ci,nombre,grupo,cargo,permanencia};
  } else {
    if(workers.some(w=>w.ci===ci)){toast('C.I. ya registrado','error');return;}
    const maxId=workers.length?Math.max(...workers.map(w=>w.id||0)):0;
    workers.push({id:maxId+1,ci,nombre,grupo,cargo,permanencia});
  }
  DB.set('trabajadores',workers);
  __ppCancelForm();
  __ppRender();
  toast(editId?'Trabajador actualizado':'Trabajador agregado','success');
}
function __ppDelete(id){
  const w=DB.get('trabajadores').find(x=>x.id===id);
  if(!w) return;
  if(!confirm('¿Eliminar a '+w.nombre+'?\nEsta acción no se puede deshacer.')) return;
  DB.set('trabajadores',DB.get('trabajadores').filter(x=>x.id!==id));
  __ppRender();
  toast('Trabajador eliminado','success');
}
/* ======================== END PERSONAL PANEL ======================== */

function filterData(data,query,fields){
  if(!query) return data;
  const q=query.toLowerCase();
  return data.filter(row=>fields.some(f=>String(row[f]||'').toLowerCase().includes(q)));
}

initData();
