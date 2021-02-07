/* 
    Equipe: 
        Kauana Caroline Neves de Araújo - Subturma D 
        Raffael Morais Dutra - Subturma C 
*/

t=0
//porta objetivo
pox=740
poy=320
//objetivo
pickobj=false
obj=0
oox=770
ooy=70
oox2=400
ooy2=3000
//bonus de pontos
var bpx=670
var bpy=80
var bpx2=400
var bpy2=50
//elemento vida 
var vx=90
var vy= 160
var vx2=40
var vy2= 130

//plataforma
l=1
var p1x=400
var p1y=300
var p2x= 100
var p2y= 200
var p3y=130 
//informação
var rgb=255
//variáveis responsável pelo objeto
var px=200, py=390, gravity=0.7, fy=0, pulo = -14, pvida = 5
//variáveis relacionadas ao disparo
var ty, tx, vel = 15, disparo = false
//variáveis responsáveis pelo inimigo
var boss = false
var ix5=800
var ix = 650 
var iy = 352
var ix2=650
var iy2=190
var ix3=650
var iy3=90
var ivida = 5
var ividab=20
var ivida2 = 5
var ivida3 = 5
var vinx=[]
var viny=[]
var vinv=[]
var vinvid=[]
//variavel de pontuação
var pont=0
//variavel da tela
var tela=1
var telaant=0
//animação do boneco
var anima
var shurik=[]
var ninjand=[]
var ninjap=[]
var ninjapul= []
var contFrame=0
var paranin=0
var pul=0
//vetor disparo
var dispv= []
var vdx= []
var vdy= []
var ground = 350
//animação inimigo
var ianima
var iniani=[]
//animação chave
var chav
var k=0
var chavinha = []
//animação moeda
var moeda
var moedinha = []
//animação explosão
var explo
var explosao=[]
var e = 0



function preload(){
  //importa os sons
  sompulo= loadSound("game-sounds/222571__coby12388__minijump.wav")	
  somtiro = loadSound("game-sounds/disparo.flac")
  sompdie= loadSound("game-sounds/player_die.wav")
  somidie= loadSound("game-sounds/enemy_die.wav")
  somhit= loadSound("game-sounds/hit.wav")
  win = loadSound("game-sounds/vitoria.wav")
  moedin= loadSound("game-sounds/coin.wav")
  //theme= loadSound("musicaJogo.mp3")
  pla= loadImage("game-imagens/dojo.jpg")
  pla2 = loadImage("game-imagens/TELA 23.jpg")
  door = loadImage("game-imagens/porta2.png")
  portinha = loadImage("game-imagens/portinha.png")
  chave = loadImage("game-imagens/FotoJetChave.png")
  imGameOver = loadImage("game-imagens/JetGaOv.png")
  pausa = loadImage("game-imagens/pause3.jpg")
  pause= loadImage("game-imagens/pauset.jpg")
  telaPause = loadImage("game-imagens/FotoJet.jpg")
  telaInicio = loadImage("game-imagens/FotoJetESPA.jpg")
  cora= loadImage("game-imagens/CORAÇÃO.png")
  fogue1= loadImage("game-imagens/foguetinho.png")
  fogue2= loadImage("game-imagens/foguetinho2.png")
  dojo3 = loadImage("game-imagens/dojo5.jpg")
  venctel = loadImage("game-imagens/TartNin.jpg")
  life = loadSound("game-sounds/life.flac")
  
  for(i=0; i<3; i++){ 
    ninjapul[i] = loadImage("game-imagens/jump_"+i+".png")
  }
   for(i=0; i<3; i++){ 
    shurik[i] = loadImage("game-imagens/arma"+i+".png")
  }
  for(i=0; i <3; i++){
    ninjand[i] = loadImage("game-imagens/run_"+i+".png")
  }
  for(i=0;i<4;i++){
    ninjap[i] = loadImage("game-imagens/idle_"+i+".png")
  }
  for(i=0; i<4; i++){
    iniani[i]= loadImage("game-imagens/sam"+i+".png")
  }
  
  for(i=0; i<5; i++){
    chavinha[i]= loadImage("game-imagens/chave"+i+".png")
  }
  
  for(i=0; i<5; i++){
    moedinha[i]= loadImage("game-imagens/ouro"+i+".png")
  }
  for(i=0; i<9; i++){
    explosao[i]= loadImage("game-imagens/explo"+i+".png")
  }
}


function setup() {
  for(i=0; i<10; i++){
   dispv[i] = false  
  }
  createCanvas(800, 400);
  frameRate(30)
  //seta um volume
  win.setVolume(2.0)
  somtiro.setVolume(2.0);
  sompdie.setVolume(5.0);
  somidie.setVolume(0.6);
  somhit.setVolume(0.2);
  moedin.setVolume(0.5);
  sompulo.setVolume(0.5);
  //theme.setVolume(0.4);
}
function draw() {
  rectMode(CENTER)
  imageMode(CENTER)
 if(tela==1){  
    //theme.play()
    image(pausa,250,120)
    textSize(32); 
    fill(random(1),random(2444),random(2));
    textFont('monospace');
    text("Ninja Killer", 60, 210);
    textSize(19)
    fill(random(1),random(2444),random(2));
    text("<< Pressione Enter >>", 40, 350);
    textSize(16)
    fill(random(1),random(2444),random(2));
    textFont('monospace');
    text("(C) Créditos", 79, 380);
    if (keyIsDown(ENTER) ) {
       tela = 1.2;  
    } 
   if (keyIsDown(67) ) {
       tela = 1.3;  
    } 
 }
   if(tela==1.2){
     frameRate(10)
     //animação dos itens
      moeda= moedinha[k]
      anima = ninjand[contFrame]
      anima2= ninjap[paranin]
      anima3= ninjapul[t]
      tiro = shurik[contFrame]
      chav = chavinha[k]
    fill(random(1),random(2444),random(2));
    background(0)
    textSize(32); 
    textFont('monospace');
    text("Tutorial", 300, 30);
    textSize(28);
    text("Vida",90,87)
    image(cora,50,80)
    text("Bônus",90,158)
    image(moeda,47,147)
    text("Chave",90,230)
    image(chav,50,220)
    text("Saída",93,310) 
    textSize(20)
    text("<< Pressione Space >>",280,390)
    fill("white") 
    text("⬅️ ➡️",580,95)
    image(anima,500,70)
    text("⬆️",610,208)
    image(anima3,500,180)
    text("CTRL",600,303)
    image(anima2,500,280)
    image(tiro,540,298)
    image(portinha,50,300)
     t++
     if(t>2){
     t=0
     }
      paranin++
    if(paranin>3){
        paranin=0
    }
      contFrame++
    if(contFrame>2){
        contFrame=0;
    }
      k++
    if(k>4){
      k=0
    }  
     
    if (keyIsDown(32) ) {
       tela = 5;
       frameRate(30)
    } 
 }
  if(tela==1.3){
    anima = ninjand[contFrame]
    tiro = shurik[contFrame]
    chav = chavinha[k]
    ianima = iniani[paranin]

    background(0)
    textFont("monospace")
    textSize(40)
    text("Créditos",290,40)
    textSize(25)
    text("Criadores:",30,97)
    textSize(20)
    text("➡️", 140,130)
    text("Kauana Caroline Neves de Araújo",170,130)
    text("➡️", 140,170)
    text("Raffael Morais Dutra",170,170)
    textSize(18)
    fill(random(1),random(2444),random(2));
    text("<< Pressione B >>",310,390)
    ix5= ix5-10
    image(ianima,400,310)
    image(anima,180,310)
    image(chav,560,320)
    image(fogue1,ix5,220)
    image(tiro,250,325)
    
    if(ix5<-50){
    ix5=840
    }
    paranin++
    if(paranin>3){
      paranin=0
    }
    contFrame++
    if(contFrame>2){
        contFrame=0;
    }
    k++
    if(k>4){
      k=0
    }
    if (keyIsDown(66) ) {
       tela = 1;
    }
  }
  
  if(tela==2){
    //plataforma 3
     if((px>358 && px<420)&&(py<=130-50)){
       ground=130-50
    }//plataforma 1
    else if((px>299 && px<530)&&(py<=p1y-50)){
       ground=p1y-50
    } //plataforma 2 
    else if((px>0 && px<240)&&(py<=p2y-50)){
       ground=p2y-50
    }//platarforma 4
    else if((px>560 && px<800)&&(py<=100-50)){
       ground=100-50
    } 
    
    else{
        ground = 350 
    
    }
    moeda= moedinha[k]
    telaant=2
  image(pla,300,100);
  fill('white')
  textSize(18)
  text('Vidas: '+parseInt(pvida),10,30)
  text('Pontos: '+pont,330,30)
  text('Nivel 1',680,30)
    fill('#d9d0b0')
    rect(p2x,p2y,200,10)
    rect(p1x,p1y,200,10)
    rect(370,p3y,30,10)
    rect(670,100,200,10)
    image(moeda,bpx,bpy)
    image(door,pox,poy)
    //vida extra
    image(cora,vx,vy)
      //Ref Player --
  if(keyIsDown(27)){
    tela=4
  }
  fy = fy + gravity+0.1
  py = fy + py
  
  if(py >= ground){
    py = ground
    fy = 0
  }
  if (keyIsDown(LEFT_ARROW)) {
    anima = ninjand[contFrame]
    px = px - 10;
    if(px<35){
      px=45
    }
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    anima = ninjand[contFrame]
    px = px + 10;
    if(px>798){
      px=768
    }
  }else{
    anima= ninjap[paranin]
  }
  //ellipse(px,py,40,40)
  // --
  // Ref Disparo --
  for(i=0;i<10; i++){
    if(dispv[i]==true){
        tiro = shurik[contFrame]
       image(tiro,vdx[i],vdy[i])
       vdx[i] = vdx[i] + vel
       if(vdx[i] >= 800 || vdx[i]<=0){
         dispv[i]= false
      }
    }
  }
  // --
  // Ref inimigo --
  
  //rect(ix, iy, 40,40)
  ianima = iniani[paranin]
  image(ianima,ix,iy)
  ix = ix - 2
  if(ix <= -50){
   ix = 850 
  }
    
  for(i=0; i<10; i++){
    if(dist(vdx[i],vdy[i],ix,iy) < 30 && dispv[i] == true){
        pont=pont+10
        ivida = ivida - 1
        dispv[i]=false
    }  
  }
  if(dist(px,py,ix,iy) < 50){
      somhit.play()
      pvida= pvida-1
      px=200
      py=390
  }
    //player e vida
   if(dist(px,py,vx,vy) < 50){
     if(pvida<5){
       life.play()
       pvida=pvida+1
       vx=10000
       vy=23000
     }
   }
  //player e bonus de pontos
  if(dist(px,py,bpx,bpy) < 50){
    moedin.play()
     pont=pont+100
    bpx=1000
    bpy=1000
  }
  //player e porta
    if(dist(px,py,pox,poy) < 60){
      alert("prox nivel")
      pont=0
      pvida=5
      ivida=5
      px=200
      ix = 650 
      iy = 352
      py=390
      tela=2.2
    }
  if(dist(px,py,ix,iy) < 75){
    if(py < (iy-30) && fy > 0){
      ivida = 0
    }
  }
  if(ivida == 0){
    somidie.play()
    pont=pont+50
    ix = 850 
    ivida = 5
  }
    if(pvida<=0){
      sompdie.play()
      tela=3
    }
  
  image(anima, px,py)
  paranin++
  if(paranin>3){
    paranin=0
  }
  contFrame++
  if(contFrame>2){
    contFrame=0;
  }
  pul++
  if(pul>3){
   pul=0
  }
  k++
  if(k>4){
  k=0
  }
 }
  //// tela 2 do jogo
   if(tela==2.2){
     telaant=2.2
     chav = chavinha[k]
  image(dojo3,300,250);
  fill('white')
  textSize(18)
  text('Vidas: '+parseInt(pvida),10,30)
  text('Pontos: '+pont,350,30)
  text('Nivel 2',670,30)
  image(chav,oox,ooy)
  image(door,pox,poy)
  rect(770,100,50,10)
  rect(260,320,50,10)
  rect(40,150,50,10)
  rect(170,260,10,10)
  rect(400,74,100,10)
  moeda= moedinha[k]
  image(moeda,bpx2,bpy2)
       //vida extra
    image(cora,vx2,vy2)
  //Ref Player --
  if(keyIsDown(27)){
    tela=4
  }
  fy = fy + gravity+0.1
  py = fy + py

    
  if (keyIsDown(LEFT_ARROW)) {
    anima = ninjand[contFrame]
    px = px - 10;
     if(px<35){
      px=45
    }
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    anima = ninjand[contFrame]
    px = px + 10;
     if(px>798){
      px=768
    }
  }else{
    anima= ninjap[paranin]
  }
  //ellipse(px,py,40,40)
  // --
  // Ref Disparo --
  for(i=0;i<10; i++){
    if(dispv[i]==true){
       tiro = shurik[contFrame]
       image(tiro,vdx[i],vdy[i])
       vdx[i] = vdx[i] + vel
       if(vdx[i] >= 800 || vdx[i]<=0){
         dispv[i]= false
      }
    }
  }
  // --
  // Ref inimigo --
  
  ianima = iniani[paranin]
  image(ianima,ix,iy)
  image(fogue1,ix2,iy2)
  image(fogue2,ix3,iy3)
     //movimentação inimigo
  ix3= ix3-10
  ix2= ix2-10
  ix = ix - 6
     //se o inimigo chegar no final da tela
  if(ix <= -50){
   ix = 850 
  }
  if(ix2 <= -50){
   ix2 = 850 
  }
  if(ix3 <= -50){
   ix3 = 850 
  }
     //se o disparo atingir o inimigo
  for(i=0; i<10; i++){
    if(dist(vdx[i],vdy[i],ix,iy) < 30 && dispv[i] == true){
        pont=pont+10
        ivida = ivida - 1
        dispv[i]=false
    }  
  }
     for(i=0; i<10; i++){
    if(dist(vdx[i],vdy[i],ix2,iy2) < 30 && dispv[i] == true){
        pont=pont+10
        ivida2 = ivida2 - 1
        dispv[i]=false
    }  
  }  
    for(i=0; i<10; i++){
    if(dist(vdx[i],vdy[i],ix3,iy3) < 30 && dispv[i] == true){
        pont=pont+10
        ivida3 = ivida3 - 1
        dispv[i]=false
    }  
  }
     //colisão player e inimigo
  if(dist(px,py,ix,iy) < 50){
      somhit.play()
      pvida= pvida-1
      px=200
      py=400
  }
     if(dist(px,py,ix2,iy2) < 56){
      somhit.play()
      pvida= pvida-1
      px=200
      py=400
  }
     if(dist(px,py,ix3,iy3) < 56){
      somhit.play()
      pvida= pvida-1
      px=200
      py=400
  }
     
  if(py >= ground){
    py = ground
    fy = 0
  }
     //colisao player e plataforma 
       if((px>740 && px<800)&&(py<=100-50)){
       ground=100-50
    } 
     else if((px>220 && px<320)&&(py<=320-50)){
       ground=320-50
    } 
     else if((px>30 && px<150)&&(py<=150-50)){
       ground=150-50
    }
     else if((px>168 && px<210)&&(py<=260-50)){
       ground=260-50
    }
     else if((px>340 && px<475)&&(py<=74-50)){
       ground=74-50
    }
    else{
        ground = 350 
    
    }
     //player e chave
      if(dist(px,py,oox,ooy) < 50){
        moedin.play()
         pickobj=true
         oox=1000
         ooy=1000   
       }
    
     //chave no topo da tela
     if(pickobj==true){     
     image(chave,700,60)
     }
     //player e porta
    if(dist(px,py,pox,poy) < 60){
      if(pickobj==true){
      alert("Se prepara!!")
      pont=0
      pickobj=false
      pvida=5
      oox=780
      ooy=70
      vx2=40
      vy2= 130
      oox2=400
      ooy2=3000
      ix = 650 
      iy = 352
      ivida=5
      ividab=20
      px=200 
      py=390
      bpx2=400
      bpy2=50
      tela=2.3
      }
    }
      //player e vida
   if(dist(px,py,vx2,vy2) < 50){
     if(pvida<5){
       life.play()
       pvida=pvida+1
       vx2=10000
       vy2=23000
     }
   }
  //player e bonus de pontos
  if(dist(px,py,bpx2,bpy2) < 50){
    moedin.play()
     pont=pont+100
    bpx2=1000
    bpy2=1000
  }  
  if(dist(px,py,ix,iy) < 75){
    if(py < (iy-30) && fy > 0){
      ivida = 0
    }
  }
     //se matar o inimigo
  if(ivida == 0){
    somidie.play()
    pont=pont+50
    ix = 850 
    ivida = 5
  }
     
  if(ivida2 == 0){
    somidie.play()
    pont=pont+50
    ix2 = 850 
    ivida2 = 5
  }
     if(ivida3 == 0){
    somidie.play()
    pont=pont+50
    ix3 = 850 
    ivida3 = 5
  }
    if(pvida<=0){
      sompdie.play()
      tela=3
    }
  
  image(anima, px,py)
  paranin++
  if(paranin>3){
    paranin=0
  }
  contFrame++
  if(contFrame>2){
    contFrame=0;
  }
  k++
  if(k>4){
  k=0
  }
 }
  
//tela 2.3
  if(tela==2.3){
     telaant=2.3
    chav = chavinha[k]
  image(pla2,380,200);
  fill('white')
  textSize(18)
  text('Vidas: '+parseInt(pvida),10,30)
  text('Pontos: '+pont,350,30)
  text('Nivel 3',670,30)
  image(chav,oox2,ooy2)
  image(door,pox,poy)
   //barreira de pontos  
  //Ref Player --
  if(keyIsDown(27)){
    tela=4
  }
  fy = fy + gravity+0.1
  py = fy + py
  
  if(py >= ground){
    py = ground
    fy = 0
  }
  if (keyIsDown(LEFT_ARROW)) {
    anima = ninjand[contFrame]
    px = px - 10;
     if(px<35){
      px=45
    }
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    anima = ninjand[contFrame]
    px = px + 10;
     if(px>798){
      px=768
    }
  }else{
    anima= ninjap[paranin]
  }
  //ellipse(px,py,40,40)
  // --
  // Ref Disparo --
  for(i=0;i<10; i++){
    if(dispv[i]==true){
       tiro = shurik[contFrame]
       image(tiro,vdx[i],vdy[i])
       vdx[i] = vdx[i] + vel
       if(vdx[i] >= 800 || vdx[i]<=0){
         dispv[i]= false
      }
    }
  }
  // --
  // Ref inimigo --
  
  fill('white')
  text(ividab,(ix+10),(iy-40))
  ianima = iniani[paranin]
  image(ianima,ix,iy)
  if(boss==false){
  ix = ix+(- 20*l) 
  }else{
    ix = ix+(- 40*l)
    }
  if(ix <= -50){
   ix =-10
   l=-1
   
  }
   if(ix >= 850){
   ix= 810
    l=1
  }  
  for(i=0; i<10; i++){
    if(dist(vdx[i],vdy[i],ix,iy) < 30 && dispv[i] == true){
        pont=pont+10
        ividab = ividab - 1
        dispv[i]=false
    }  
  }
  if(dist(px,py,ix,iy) < 50){
      somhit.play()
      pvida= pvida-1
      px=200
      py=390
  }
      //player e vida
   if(dist(px,py,vx,vy) < 50){
     if(pvida<5){
       life.play()
       pvida=pvida+1
       vx=10000
       vy=23000
     }
   }
    //player e chave
    if(boss==false){
     if(dist(px,py,oox2,ooy2) < 50){
       moedin.play()
       oox2=400
       ooy2=300
       ividab=20
       ix=800
       iy=350
       boss=true
       pickobj=false
     }
    }
    if(boss==true){
      if(dist(px,py,oox2,ooy2) < 50){
       pickobj=true
      if(pickobj==true){
       oox2=400
       ooy2=3000
      }
       }
    }
     //chave no topo da tela
     if(pickobj==true){
     image(chave,690,60)
     }
     //player e porta
    if(dist(px,py,pox,poy) < 60){
      if(pickobj==true){
      win.play()
      alert("Parabéns")
      pont=0
      pvida=5
      ivida=5
      ividab=20
      px=200 
      py=390
      pickobj=false
      tela=6
      }
    }
      //player e vida
   if(dist(px,py,vx,vy) < 50){
     if(pvida<5){
       life.play()
       pvida=pvida+1
       vx=10000
       vy=23000
     }
   }
  if(boss==false){
  if(ividab == 0){
    somidie.play()
    oox2=ix
    ooy2=iy
    pont=pont+50
    iy=1000
    ividab=3  
  }
  }else{
    if(ividab==0){
    somidie.play()
    pont= pont+50
    iy=10000
    ividab=3
    }
  }
   
    if(pvida<=0){
      sompdie.play()
      tela=3
    }
  
  image(anima, px,py)
  paranin++
  if(paranin>3){
    paranin=0
  }
  contFrame++
  if(contFrame>2){
    contFrame=0;
  }
  
  k++
  if(k>4){
  k=0
  }
  
 }
 
  
  if(tela==3){
 image(imGameOver,400,220);
   
    //textSize(20); 
    //fill(135,206,235);
    //text("Quer tentar novamente?", 270, 230);
    textSize(67)
    fill(random(227),random(236))
    textFont('verdan')
    text("GAME OVER",30,220)
    textSize(20)
    fill('#A3A7AC');
    textFont('verdan');
    text(">> Jogar novamente (space)", 100, 290);
    if(keyIsDown(32)){
      tela=5
      pvida= 5
      pickobj=false
      boss=false
      ivida= 5
      ividab=20
      ix = 650 
      iy = 352
      px=200
      py=390
      pont=0
      vx=90
      vy= 160
      bpx=670
      bpy=80
      oox=780
      ooy=70
      oox2=400
      ooy2=3000
      vx2=40
      vy2= 130
      bpx2=400
      bpy2=50
      ix2=650
      iy2=180
    }
 }
  if(tela==4){
    anima1 = ninjand[contFrame]
    ianima = iniani[paranin]
    image(telaPause,400,200);
    textSize(32); 
    fill('#72D5D5');
    textSize(18)
    text(">> CLICK ENTER PARA CONTINUAR", 250,280)
    image(ianima,660,300)
    image(anima1,160,300)
    paranin++
    if(paranin>3){
      paranin=0
    }
    contFrame++
    if(contFrame>2){
      contFrame=0;
    }
    
    if (keyIsDown(ENTER) ) {
       tela = telaant;  
    }
  }
  if(tela==5){
    image(telaInicio,400,200);
    textSize(32);  
    fill(random(1),random(2444),random(2));  
    text("Levels:", 250, 50);
    //nvl 1
    textSize(32); 
    fill(random(1),random(2444),random(2));
    text(">>", 20, 120);
    textSize(32); 
    fill(random(1),random(2444),random(2));
    text("Level 1 (press 1)", 63,120);
    //nvl 2
     textSize(32); 
    fill(random(1),random(2444),random(2));
    text(">>", 20, 200);
    textSize(32); 
    fill(random(1),random(2444),random(2));
    text("Level 2 (press 2)", 63,200);
    //nvl3
    textSize(32); 
    fill(random(1),random(2444),random(2));
    text(">>", 20, 280);
    textSize(32); 
    fill(random(1),random(2444),random(2));
    text("Level 3 (press 3)", 63,280);
    if (keyIsDown(49) ) {
       tela = 2;  
    }
    if (keyIsDown(50) ) {
       tela = 2.2;  
    }
    if (keyIsDown(51) ) {
       tela = 2.3;  
    }
  }
  if(tela==6){
    
    image(venctel,400,200)
    textFont('verdan')
    textSize(42); 
    fill(random(345),random(224),random(0));
    text("VOCÊ VENCEU!!!!", 240, 40);
    textSize(32); 
    fill(random(1),random(2444),random(2))
    text("Quer jogar novamente?", 230, 320);
    textSize(20); 
    fill(random(1),random(2444),random(2));
    text("Sim(space)", 183, 355);
    textSize(20); 
    fill(random(1),random(2444),random(2));
    text("Não(0)", 500, 355);
    if(keyIsDown(32)){
     
     pickobj=false
      ivida= 5
      ividab=20
      pvida=5
      ix = 650 
      iy = 352
      px=200
      py=390
      pont=0
      boss=false
      vx=90
      vy= 160
      bpx=670
      bpy=80
      oox=780
      ooy=70
      oox2=400
      ooy2=3000
      bpx2=400
      bpy2=50
       tela=5
    }
    if(keyIsDown(48)){
      pickobj=false
      pvida=5
      ivida= 5
      ix = 650 
      iy = 352
      ividab=20
      px=200
      py=390
      pont=0
      vx=90
      vy= 160
      bpx=670
      bpy=80
      boss=false
      oox2=400
      ooy2=3000
      bpx2=400
      bpy2=50
      oox=780
      ooy=70
      tela=1
    }
  }
}
   //if(pvida==0||pvida<0){
    //sompdie.play
    
   // px= 200
   //py=0
  // pvida= 5

function keyPressed(){
  if(keyCode === UP_ARROW){
    sompulo.play()
    if(py == ground){
      fy = fy + pulo
    }
  }
  
  if(keyCode === CONTROL){
    somtiro.play()
    for(i=0; i<10; i++){
      if(dispv[i]==false){
        vdx[i] = px + 40
        vdy[i] = py
        dispv[i]= true
        i = 10;
      }
    }
  }
}