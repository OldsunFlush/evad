// Différencier les navigateurs pour la compatibilité //    

//alert($.browser['mozilla'])

if ($.browser['mozilla']) {
var tab = [
    {urlmus:"music/Purcell_-_Thou_knowest_Lord.ogg", typemus:"audio/ogg", title: "Purcell - Thou knowest, Lord"},
    {urlmus:"music/Das_ist_meine_Freude.ogg", typemus:"audio/ogg", title: "Das ist meine Freude"},
    {urlmus:"music/Dixit_Dominus.ogg", typemus:"audio/ogg", title: "Dixit Dominus"},
    {urlmus:"music/Juxta_crucem.ogg", typemus:"audio/ogg", title: "Juxta crucem"},
];
} else{
var tab = [
    {urlmus:"music/Purcell_-_Thou_knowest_Lord.mp3", typemus:"audio/mpeg", title: "Purcell - Thou knowest, Lord"},
    {urlmus:"music/Das_ist_meine_Freude.mp3", typemus:"audio/mpeg", title: "Das ist meine Freude"},
    {urlmus:"music/Dixit_Dominus.mp3", typemus:"audio/mpeg", title: "Dixit Dominus"},
    {urlmus:"music/Juxta_crucem.mp3", typemus:"audio/mpeg", title: "Juxta crucem"},
];
}