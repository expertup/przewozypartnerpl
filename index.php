<?php
if(isset($_POST['close'])){
  setcookie('cookieAlert', '1', time()+(3600*24*365*20));
  header('Refresh: 0;');
  exit;
}

require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;
?>
<!doctype html>
<html>
  <head>
  <base href="http://backup.expertup.usermd.net/przewozypartner.pl/">
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <link rel="stylesheet" type="text/css" href="./css/style.css">
  <link rel="stylesheet" type="text/css" href="./css/swipebox.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta charset="utf-8" />
  <title>O firmie - Przewozy Partner</title>
  <meta name="Description" content="Firma Usługi Transportowe Stanisław Łaszkiewicz na trasie Szczebrzeszyn Lublin" />
  <meta content="index,follow,all" name="robots" />
  <meta name="keywords" content="szczebrzeszyn lublin transport przewóz osób bus autobus wynajem kierowca" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></script>
  <script type="text/javascript" src="./jquery.swipebox.js"></script>
  <script type="text/javascript" src="./ios-orientationchange-fix.js"></script>
    <script type="text/javascript" src="./script.js"></script>
  <?php if($detect->isMobile()){?>
  <style>
    a>img.phone{display: inline-block;}
    a[href^=tel]{text-decoration: underline !important;}
    div.small_menu ul>li>a{padding: 12px;}
  </style>
  <?php }?>
  </head>
  <body>
    <header>
    <img class="logo" src="./images/logo.png" style="left: 25px;">
    <ul class="full"><li class="active"><a href="#">O firmie</a></li><li><a href="#rozklad-jazdy">Rozkład jazdy</a></li><li><a href="#galeria">Galeria</a></li><li><a href="#kontakt">Kontakt</a></li></ul>
    <div class="small_menu">
      <div class="button">
        <div class="icon"></div>
        <ul class="minimal"><li class="active"><a href="#">O firmie</a></li><li><a href="#rozklad-jazdy">Rozkład jazdy</a></li><li><a href="#galeria">Galeria</a></li><li><a href="#kontakt">Kontakt</a></li></ul>
      </div>
    </div>
    </header>
  <a name="ofirmie"></a>
    <div id="ofirmie">
    <div class="top_text">
      Firma Usługi Transportowe Stanisław Łaszkiewicz, jest profesjonalnym przewoźnikiem  w zakresie licencjonowanego przewozu osób na terenie kraju oraz za granicą. Działamy na rynku od 2004 r. Jesteśmy doświadczonym przewoźnikiem, dbającym o profesjonalizm świadczonych usług, jak również o zachowanie atrakcyjnych i konkurencyjnych cen.<br>
      <br>
      Dysponujemy samochodami od 4 do 32 osób, dzięki temu dopasowujemy się do indywidualnych potrzeb naszych klientów.
    </div>
    <img id="busy" src="./images/busy.png">
    <div class="decription">
    W naszej ofercie polecamy Państwu szeroką gamę usług m.in.:<br>
    <ul>
      <li>wycieczki</li>
      <li>imprezy okolicznościowe</li>
      <li>transfery na lotnisko</li> 
      <li>wyjazdy sportowe</li>
      <li>kongresy</li>
      <li>szkolenia</li>
      <li>pielgrzymki</li>
    </ul>
    oraz wiele innych wydarzeń, nie pomijając przy tym osób prywatnych i zamówień indywidualnych.<br>
    <br>
    Przebywając na Roztoczu na Terenach Roztoczańskiego Parku Narodowego i okolicach mamy możliwość elastycznego dostosowania się do Państwa potrzeb i wykonania dodatkowych usług związanych z transportem.<br>
    <br>
    Przykładem takich usług jest: transport Państwa rowerów, sprzętów sportowych oraz innych przedmiotów niezbędnych do spędzania wolnego czasu.<br>
    Pomoc w zorganizowaniu wyjazdu, powrotu do miejsc rekreacyjnych np.:
    <ul>
      <li>spływy kajakowe</li>
      <li>miejsca piknikowe</li>
      <li>ogniska miejskie</li>
      <li>domki oraz noclegi</li>
      <li>szlaki piesze</li>
      <li>sesje zdjęciowe</li>
      <li>szlaki rowerowe</li>
      <li>muzea, wsie, miasteczka</li>
      <li>kuligi zimą</li>
      <li>zawody wędkarskie</li>
      <li>schroniska na roztoczu w Józefowie i Zwierzyńcu</li>
      <li>zorganizowane rajdy piesze oraz rowerowe</li>
      <li>wizytówki roztocza tj. Kościół na wodzie w Zwierzyńcu, "Szumy", Hodowla Konika Polskiego "Florianka", kąpielisko Echo oraz Majdan Sopocki</li>
      <li>stok narciarski w Jacni oraz stok narciarski w Chrzanowie Czwartym</li>
      <li>imprezy okolicznościowe takie jak Chmielaki w Krasnymstawie, Dożynki Gminne, Letnia Akademia Filmowa w Zwierzyńcu, Festiwal Folkowisko itp.</li>
    </ul>
    Nasza Firma świadczy usługi związane głównie z transportem, które ułatwią i pozwolą w pełni korzystać z Walorów Roztoczańskiego Regionu oraz pomoc w dotarciu do miejsc wyznaczonych przez Państwa. 

    Firma Usługi Transportowe Stanisław Łaszkiewicz współpracuje z Firmami od organizacji Eventów oraz Biurami Podróży na Roztoczu, które pomogą w przygotowaniu i organizacji. Jednak samodzielnie nie zajmujemy się bezpośrednio organizacją eventów, imprez okolicznościowych oraz różnego rodzaju organizacją form spędzania wolnego czasu na Roztoczu. 
    </div>
    
  </div>
  <a name="rozklad-jazdy"><span style="padding-top: 40px; margin-top: -40px; visibliy: hidden;display:block;"></span></a>
  <div class="maps_route">
    <div id="hours">
      <div class="routelist">
        <table>
          <tr><th>Szczebrzeszyn -> Lublin</th></tr>
          <tr><td>
            Szczebrzeszyn D.A ul. Targowa<br>
            <span class="time">5:08 <small>Ea</small></span>
            <span class="time">13:10 <small>Ea</small></span>
            <span class="time">16:25 <small>7a</small></span>
          </td></tr>
          <tr><td>
            Szczebrzeszyn ul. Przedm. Błonie II<br>
            <span class="time">5:11 <small>Ea</small></span>
            <span class="time">13:13 <small>Ea</small></span>
            <span class="time">16:28 <small>7a</small></span>
          </td></tr>
          <tr><td>
            Kawęczyn III<br>
            <span class="time">5:13 <small>Ea</small></span>
            <span class="time">13:15 <small>Ea</small></span>
            <span class="time">16:30 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Topólcza II<br>
            <span class="time">5:13 <small>Ea</small></span>
            <span class="time">13:15 <small>Ea</small></span>
            <span class="time">16:30 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Turzyniec III<br>
            <span class="time">5:18 <small>Ea</small></span>
            <span class="time">13:20 <small>Ea</small></span>
            <span class="time">16:35 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wywłoczka<br>
            <span class="time">5:20 <small>Ea</small></span>
            <span class="time">13:22 <small>Ea</small></span>
            <span class="time">16:37 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zwierzyniec Miasto skrzyż ul. Zamojskiej i Parkowej<br>
            <span class="time">5:22 <small>Ea</small></span>
            <span class="time">13:24 <small>Ea</small></span>
            <span class="time">16:39 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zwierzyniec - skrzyżowanie\ul. Zamojska<br>
            <span class="time">5:24 <small>Ea</small></span>
            <span class="time">13:26 <small>Ea</small></span>
            <span class="time">16:41 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Panasówka skrzyż. na Lipowiec<br>
            <span class="time">5:30 <small>Ea</small></span>
            <span class="time">13:32 <small>Ea</small></span>
            <span class="time">16:47 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lipowiec I Tereszpolski<br>
            <span class="time">5:33 <small>Ea</small></span>
            <span class="time">13:35 <small>Ea</small></span>
            <span class="time">16:50 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lipowiec II Tereszpolski<br>
            <span class="time">5:35 <small>Ea</small></span>
            <span class="time">13:37 <small>Ea</small></span>
            <span class="time">16:52 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czarnystok III<br>
            <span class="time">5:38 <small>Ea</small></span>
            <span class="time">13:40 <small>Ea</small></span>
            <span class="time">16:55 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czarnystok II<br>
            <span class="time">5:40 <small>Ea</small></span>
            <span class="time">13:42 <small>Ea</small></span>
            <span class="time">16:57 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wólka Czarnystocka I<br>
            <span class="time">5:42 <small>Ea</small></span>
            <span class="time">13:44 <small>Ea</small></span>
            <span class="time">16:59 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gorajec Zagroble I<br>
            <span class="time">5:44 <small>Ea</small></span>
            <span class="time">13:46 <small>Ea</small></span>
            <span class="time">17:01 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gorajec Stara Wieś I<br>
            <span class="time">5:47 <small>Ea</small></span>
            <span class="time">13:49 <small>Ea</small></span>
            <span class="time">17:04 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Podborcze I<br>
            <span class="time">5:49 <small>Ea</small></span>
            <span class="time">13:51 <small>Ea</small></span>
            <span class="time">17:06 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zaburze I<br>
            <span class="time">5:53 <small>Ea</small></span>
            <span class="time">13:55 <small>Ea</small></span>
            <span class="time">17:10 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Latyczyn I<br>
            <span class="time">5:55 <small>Ea</small></span>
            <span class="time">13:57 <small>Ea</small></span>
            <span class="time">17:12 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Radecznica II<br>
            <span class="time">5:58 <small>Ea</small></span>
            <span class="time">14:00 <small>Ea</small></span>
            <span class="time">17:15 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zaporze I<br>
            <span class="time">6:01 <small>Ea</small></span>
            <span class="time">14:03 <small>Ea</small></span>
            <span class="time">17:18 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wólka Czernięcińska<br>
            <span class="time">6:04 <small>Ea</small></span>
            <span class="time">14:06 <small>Ea</small></span>
            <span class="time">17:21 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gaj Czernięciński<br>
            <span class="time">6:06 <small>Ea</small></span>
            <span class="time">14:08 <small>Ea</small></span>
            <span class="time">17:23 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Żurawie I<br>
            <span class="time">6:09 <small>Ea</small></span>
            <span class="time">14:11 <small>Ea</small></span>
            <span class="time">17:26 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Rokitów I<br>
            <span class="time">6:12 <small>Ea</small></span>
            <span class="time">14:14 <small>Ea</small></span>
            <span class="time">17:29 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Załawcze<br>
            <span class="time">6:14 <small>Ea</small></span>
            <span class="time">14:16 <small>Ea</small></span>
            <span class="time">17:31 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Turobin ul. Staszica<br>
            <span class="time">6:16 <small>Ea</small></span>
            <span class="time">14:18 <small>Ea</small></span>
            <span class="time">17:33 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Tarnawa Mała<br>
            <span class="time">6:20 <small>Ea</small></span>
            <span class="time">14:22 <small>Ea</small></span>
            <span class="time">17:37 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Guzówka<br>
            <span class="time">6:23 <small>Ea</small></span>
            <span class="time">14:25 <small>Ea</small></span>
            <span class="time">17:40 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Nowy Dwór - stacja paliw<br>
            <span class="time">6:25 <small>Ea</small></span>
            <span class="time">14:27 <small>Ea</small></span>
            <span class="time">17:42 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wysokie plac komunikacji publi.<br>
            <span class="time">6:28 <small>Ea</small></span>
            <span class="time">14:30 <small>Ea</small></span>
            <span class="time">17:45 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gielczew<br>
            <span class="time">6:31 <small>Ea</small></span>
            <span class="time">14:33 <small>Ea</small></span>
            <span class="time">17:48 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Giemiak - zajazd<br>
            <span class="time">6:34 <small>Ea</small></span>
            <span class="time">14:36 <small>Ea</small></span>
            <span class="time">17:51 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zielona<br>
            <span class="time">6:37 <small>Ea</small></span>
            <span class="time">14:39 <small>Ea</small></span>
            <span class="time">17:54 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Boży Dar<br>
            <span class="time">6:38 <small>Ea</small></span>
            <span class="time">14:40 <small>Ea</small></span>
            <span class="time">17:55 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrkówek<br>
            <span class="time">6:40 <small>Ea</small></span>
            <span class="time">14:42 <small>Ea</small></span>
            <span class="time">17:57 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrków - szkoła<br>
            <span class="time">6:43 <small>Ea</small></span>
            <span class="time">14:45 <small>Ea</small></span>
            <span class="time">18:00 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrków Drugi<br>
            <span class="time">6:46 <small>Ea</small></span>
            <span class="time">14:48 <small>Ea</small></span>
            <span class="time">18:03 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Jabłonna - III szkoła<br>
            <span class="time">6:48 <small>Ea</small></span>
            <span class="time">14:50 <small>Ea</small></span>
            <span class="time">18:05 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Jabłonna - II Urząd Gminy<br>
            <span class="time">6:51 <small>Ea</small></span>
            <span class="time">14:53 <small>Ea</small></span>
            <span class="time">18:08 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czerniejów - I kościół<br>
            <span class="time">6:55 <small>Ea</small></span>
            <span class="time">14:57 <small>Ea</small></span>
            <span class="time">18:12 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Głuszczyzna<br>
            <span class="time">6:58 <small>Ea</small></span>
            <span class="time">15:00 <small>Ea</small></span>
            <span class="time">18:15 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Mętów - I szkoła<br>
            <span class="time">7:01 <small>Ea</small></span>
            <span class="time">15:03 <small>Ea</small></span>
            <span class="time">18:18 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Ćmiłów<br>
            <span class="time">7:03 <small>Ea</small></span>
            <span class="time">15:05 <small>Ea</small></span>
            <span class="time">18:20 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin ul. Abramowicka\ Wólka Abramowicka 01\02<br>
            <span class="time">7:08 <small>Ea</small></span>
            <span class="time">15:10 <small>Ea</small></span>
            <span class="time">18:25 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin ul. Kunickiego\ Mickiewicza 02<br>
            <span class="time">7:10 <small>Ea</small></span>
            <span class="time">15:12 <small>Ea</small></span>
            <span class="time">18:27 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin ul. Kunickiego\ Dom Kolejarza 02<br>
            <span class="time">7:12 <small>Ea</small></span>
            <span class="time">15:14 <small>Ea</small></span>
            <span class="time">18:29 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin Dworzec Południowy ul. Dworcowa 4<br>
            <span class="time">7:14 <small>Ea</small></span>
            <span class="time">15:16 <small>Ea</small></span>
            <span class="time">18:31 <small>7a</small><span>
          </td></tr>
      <tr><th>Lublin -> Szczebrzeszyn</th></tr>
          <tr><td>
            Lublin Dworzec Południowy ul. Dworcowa 4<br>
            <span class="time">8:20 <small>Ea</small></span>
            <span class="time">15:40 <small>Ea</small></span>
            <span class="time">18:55 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin ul. Kunickiego\ Mickiewicza 01<br>
            <span class="time">8:24 <small>Ea</small></span>
            <span class="time">15:44 <small>Ea</small></span>
            <span class="time">18:59 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lublin ul. Abramowicka\ Wólka Abramowicka 01\02<br>
            <span class="time">8:26 <small>Ea</small></span>
            <span class="time">15:46 <small>Ea</small></span>
            <span class="time">19:01 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Ćmiłów<br>
            <span class="time">8:31 <small>Ea</small></span>
            <span class="time">15:51 <small>Ea</small></span>
            <span class="time">19:06 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Mętów - I szkoła<br>
            <span class="time">8:33 <small>Ea</small></span>
            <span class="time">15:53 <small>Ea</small></span>
            <span class="time">19:08 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Głuszczyzna<br>
            <span class="time">8:36 <small>Ea</small></span>
            <span class="time">15:56 <small>Ea</small></span>
            <span class="time">19:11 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czerniejów - I kościół<br>
            <span class="time">8:39 <small>Ea</small></span>
            <span class="time">15:59 <small>Ea</small></span>
            <span class="time">19:14 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Jabłonna - II Urząd Gminy<br>
            <span class="time">8:43 <small>Ea</small></span>
            <span class="time">16:03 <small>Ea</small></span>
            <span class="time">19:18 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Jabłonna - III szkoła<br>
            <span class="time">8:46 <small>Ea</small></span>
            <span class="time">16:06 <small>Ea</small></span>
            <span class="time">19:21 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrków Drugi<br>
            <span class="time">8:48 <small>Ea</small></span>
            <span class="time">16:08 <small>Ea</small></span>
            <span class="time">19:23 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrków - szkoła<br>
            <span class="time">8:51 <small>Ea</small></span>
            <span class="time">16:11 <small>Ea</small></span>
            <span class="time">19:26 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Piotrkówek<br>
            <span class="time">8:54 <small>Ea</small></span>
            <span class="time">16:14 <small>Ea</small></span>
            <span class="time">19:29 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Boży Dar<br>
            <span class="time">8:56 <small>Ea</small></span>
            <span class="time">16:16 <small>Ea</small></span>
            <span class="time">19:31 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zielona<br>
            <span class="time">8:57 <small>Ea</small></span>
            <span class="time">16:17 <small>Ea</small></span>
            <span class="time">19:32 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Giemiak - zajazd<br>
            <span class="time">9:00 <small>Ea</small></span>
            <span class="time">16:20 <small>Ea</small></span>
            <span class="time">19:35 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gielczew<br>
            <span class="time">9:03 <small>Ea</small></span>
            <span class="time">16:24 <small>Ea</small></span>
            <span class="time">19:38 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wysokie plac komunikacji publi.<br>
            <span class="time">9:06 <small>Ea</small></span>
            <span class="time">16:27 <small>Ea</small></span>
            <span class="time">19:41 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Nowy Dwór - stacja paliw<br>
            <span class="time">9:09 <small>Ea</small></span>
            <span class="time">16:30 <small>Ea</small></span>
            <span class="time">19:44 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Guzówka<br>
            <span class="time">9:11 <small>Ea</small></span>
            <span class="time">16:32 <small>Ea</small></span>
            <span class="time">19:46 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Tarnawa Mała<br>
            <span class="time">9:14 <small>Ea</small></span>
            <span class="time">16:35 <small>Ea</small></span>
            <span class="time">19:49 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Turobin ul. Staszica<br>
            <span class="time">9:18 <small>Ea</small></span>
            <span class="time">16:39 <small>Ea</small></span>
            <span class="time">19:53 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Załawcze<br>
            <span class="time">9:20 <small>Ea</small></span>
            <span class="time">16:41 <small>Ea</small></span>
            <span class="time">19:55 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Rokitów I<br>
            <span class="time">9:22 <small>Ea</small></span>
            <span class="time">16:43 <small>Ea</small></span>
            <span class="time">19:57 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Żurawie I<br>
            <span class="time">9:25 <small>Ea</small></span>
            <span class="time">16:46 <small>Ea</small></span>
            <span class="time">20:00 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gaj Czernięciński<br>
            <span class="time">9:28 <small>Ea</small></span>
            <span class="time">16:49 <small>Ea</small></span>
            <span class="time">20:03 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wólka Czernięcińska<br>
            <span class="time">9:30 <small>Ea</small></span>
            <span class="time">16:51 <small>Ea</small></span>
            <span class="time">20:05 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zaporze I<br>
            <span class="time">9:33 <small>Ea</small></span>
            <span class="time">16:54 <small>Ea</small></span>
            <span class="time">20:08 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Radecznica II<br>
            <span class="time">9:36 <small>Ea</small></span>
            <span class="time">16:57 <small>Ea</small></span>
            <span class="time">20:11 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Latyczyn I<br>
            <span class="time">9:39 <small>Ea</small></span>
            <span class="time">17:00 <small>Ea</small></span>
            <span class="time">20:14 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zaburze I<br>
            <span class="time">9:41 <small>Ea</small></span>
            <span class="time">17:02 <small>Ea</small></span>
            <span class="time">20:16 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Podborcze I<br>
            <span class="time">9:45 <small>Ea</small></span>
            <span class="time">17:06 <small>Ea</small></span>
            <span class="time">20:20 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gorajec Stara Wieś I<br>
            <span class="time">9:47 <small>Ea</small></span>
            <span class="time">17:08 <small>Ea</small></span>
            <span class="time">20:22 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Gorajec Zagroble I<br>
            <span class="time">9:50 <small>Ea</small></span>
            <span class="time">17:11 <small>Ea</small></span>
            <span class="time">20:25 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wólka Czarnystocka I<br>
            <span class="time">9:52 <small>Ea</small></span>
            <span class="time">17:13 <small>Ea</small></span>
            <span class="time">20:27 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czarnystok II<br>
            <span class="time">9:54 <small>Ea</small></span>
            <span class="time">17:15 <small>Ea</small></span>
            <span class="time">20:29 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Czarnystok III<br>
            <span class="time">9:56 <small>Ea</small></span>
            <span class="time">17:17 <small>Ea</small></span>
            <span class="time">20:31 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lipowiec II Tereszpolski<br>
            <span class="time">9:59 <small>Ea</small></span>
            <span class="time">17:2 <small>Ea</small></span>
            <span class="time">20:34 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Lipowiec I Tereszpolski<br>
            <span class="time">10:01 <small>Ea</small></span>
            <span class="time">17:22 <small>Ea</small></span>
            <span class="time">20:36 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zwierzyniec - skrzyżowanie\ul. Zamojska<br>
            <span class="time">10:10 <small>Ea</small></span>
            <span class="time">17:31 <small>Ea</small></span>
            <span class="time">20:45 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Zwierzyniec Miasto skrzyż ul. Zamojskiej i Parkowej<br>
            <span class="time">10:12 <small>Ea</small></span>
            <span class="time">17:33 <small>Ea</small></span>
            <span class="time">20:47 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Wywłoczka<br>
            <span class="time">10:14 <small>Ea</small></span>
            <span class="time">17:35 <small>Ea</small></span>
            <span class="time">20:49 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Turzyniec III<br>
            <span class="time">10:16 <small>Ea</small></span>
            <span class="time">17:37 <small>Ea</small></span>
            <span class="time">20:51 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Topólcza II<br>
            <span class="time">10:18 <small>Ea</small></span>
            <span class="time">17:39 <small>Ea</small></span>
            <span class="time">20:53 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Kawęczyn III<br>
            <span class="time">10:21 <small>Ea</small></span>
            <span class="time">17:42 <small>Ea</small></span>
            <span class="time">20:56 <small>7a</small><span>
          </td></tr>
          <tr><td>
            Szczebrzeszyn ul. Przedm. Błonie II<br>
            <span class="time">10:23 <small>Ea</small></span>
            <span class="time">17:44 <small>Ea</small></span>
            <span class="time">20:58 <small>7a</small></span>
          </td></tr>
          <tr><td>
            Szczebrzeszyn D.A ul. Targowa<br>
            <span class="time">10:26 <small>Ea</small></span>
            <span class="time">17:47 <small>Ea</small></span>
            <span class="time">21:01 <small>7a</small></span>
          </td></tr>
        </table>
      </div>
        <div id="lub_szcz" class="float_info" style="display: none;">Lublin -> Szczebrzeszyn</div>
        <div id="szcz_lub" class="float_info">Szczebrzeszyn -> Lublin</div>
      <div class="info">
        <span style="text-align: center; font-weight: bold; width: 100%; display: block;">Legenda:</span>
        <strong>E</strong> - kursuje od poniedziałku do soboty oprócz świąt<br>
        <strong>7</strong> - kursuje w niedzielę<br>
        <strong>a</strong> - nie kursuje w pierwszy dzień Świąt Wielkanocnych oraz w dniu 25.XII
      </div>
    </div>
    <div id="maps"></div>
  </div>
  <a name="galeria"><span style="padding-top: 40px; margin-top: -40px; visibliy: hidden;display:block;"></span></a>
    <div id="galeria">
    <a href="./gallery/DSC01826.JPG" class="swipebox"><img src="./gallery/DSC01826_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01827.JPG" class="swipebox"><img src="./gallery/DSC01827_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01829.JPG" class="swipebox"><img src="./gallery/DSC01829_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01830.JPG" class="swipebox"><img src="./gallery/DSC01830_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01831.JPG" class="swipebox"><img src="./gallery/DSC01831_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01832.JPG" class="swipebox"><img src="./gallery/DSC01832_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01834.JPG" class="swipebox"><img src="./gallery/DSC01834_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01835.JPG" class="swipebox"><img src="./gallery/DSC01835_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01836.JPG" class="swipebox"><img src="./gallery/DSC01836_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01837.JPG" class="swipebox"><img src="./gallery/DSC01837_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01838.JPG" class="swipebox"><img src="./gallery/DSC01838_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01839.JPG" class="swipebox"><img src="./gallery/DSC01839_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01840.JPG" class="swipebox"><img src="./gallery/DSC01840_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01841.JPG" class="swipebox"><img src="./gallery/DSC01841_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01842.JPG" class="swipebox"><img src="./gallery/DSC01842_thumbs.JPG" alt="image"></a>
    <a href="./gallery/DSC01843.JPG" class="swipebox"><img src="./gallery/DSC01843_thumbs.JPG" alt="image"></a>
  </div>
  <a name="kontakt"><span style="padding-top: 40px; margin-top: -40px; visibliy: hidden;display:block;"></span></a>
    <div id="kontakt">
    <div class="dane">
      Usługi Transportowe Stanisław Łaszkiewicz<br><br>
      ul. Lubelska 42<br>
      22-460 Szczebrzeszyn<br>
      NIP 922 143 31 79<br><br>
      Tel:<br>
      <a href="tel:+48605254458"><img class="phone" src="./images/phone_white.png">605-254-458</a><br>
      <a href="tel:+48609772585"><img class="phone" src="./images/phone_white.png">609-772-585</a>
    </div>
    <div id="minimap">
    </div>
    <div class="foot">
      Usługi&nbsp;Transportowe Stanisław&nbsp;Łaszkiewicz © <? echo date("Y");?> wszystkie&nbsp;prawa&nbsp;zastrzeżone.<br />
      Wykonanie strony: <a href="mailto:strony.piotr.siekierzynski@gmail.com" target="_blank"><img src="./images/mail.png" alt="mail">Piotr Siekierzyński</a>
    </div>
   </div>
    <footer>
    <a href="tel:+48605254458"><img class="phone" src="./images/phone_white.png">605-254-458</a><a href="tel:+48609772585"><img class="phone" src="./images/phone_white.png">609-772-585</a>
    </footer>
  <?php if($_COOKIE['cookieAlert']!='1'){ ?>
  <div class="info_cookies" style="display: table;">
    <div class="c_left">
      Wykorzystujemy pliki Cookies, aby nasza strona lepiej spełniała Państwa wymagania. Można zablokować zapisywanie plików Cookies zmieniając ustawienia przeglądarki.
    </div>
    <div class="c_right">
      <form id="cookies" method="post" action="/">
        <input name="close" type="submit" class="close" value="×" />
      </form>
    </div>
  </div>
  <?php }?>
  <div id="background_float"></div>
  <?php if(!$detect->isMobile()){?>
<script>
function remove_numbers(){
  $('a[href^=tel]').each(function(){
    $(this).replaceWith('<span>'+$(this).text()+'</text>');
  });
}
remove_numbers();
</script>
<?php }?>
  </body>
</html>
