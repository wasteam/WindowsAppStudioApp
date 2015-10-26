var TDev;
if (!TDev) TDev = {};

TDev.precompiledScript = {
"this": (function (cs) {
'use strict';
var libs = cs.libs = {};
var lib = TDev.RT;
var callstackcurdepth = 0;
cs.scriptTitle = "Wabbit Wars";
cs.scriptColor = "\u0023007fff";
cs.objectSingletons = {};
/* ACTION: game actors init */
function a_gameactorsinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameactorsinit$0;
  s.name = "game actors init";
  return s;
}
cs.registerAction("game actors init", "gameactorsinit", a_gameactorsinit, true);

function ok1(s, a0) {
  return (a0 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok2(s, a0, a1) {
  return (a0 == undefined || a1 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok3(s, a0, a1, a2) {
  return (a0 == undefined || a1 == undefined || a2 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok4(s, a0, a1, a2, a3) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_gameactorsinit$0(s) {
  (s.pc = "GHBIDgFrTdjfFa6c");
  return s.rt.enter(a_rabbitadd(s, a_gameactorsinit$2));
}
cs.registerStep(a_gameactorsinit$0, 'a_gameactorsinit$0');

function a_gameactorsinit$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "RFSyawIAVlx8jwIk");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_sprite_set(s));
  (/* turtles */ s.d.$turtles = t_call_1);
  s.rt.logDataWrite();
  (s.pc = "xg6ImLiAAwpoyQna");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_sprite_set(s));
  (/* gates */ s.d.$gates = t_call_2);
  s.rt.logDataWrite();
  (s.pc = "i2TZm89lxdc8qrIe");
  var t_call_3 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_sprite_set(s));
  (/* bombs */ s.d.$bombs = t_call_3);
  s.rt.logDataWrite();
  (s.pc = "DC0KoxTTiAbLyk8w");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_sprite_set(s));
  (/* shells */ s.d.$shells = t_call_4);
  s.rt.logDataWrite();
  var t_elseIf_5 = true;
  (s.pc = "Y6XQxL2oeaUy4AvE");
  if (/* options */ s.d.$options) {
  var t_recOp_6 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_6);
  if (t_recOp_6) {
  (s.pc = "n4zIpjwQdoBPsdKC");
  var t_resumeCtx_7 = s.rt.getBlockingResumeCtx(a_gameactorsinit$5);
  var t_call_8 = (ok1(s, /* tiny wurtle */ s.d.$tinywurtle) && /* tiny wurtle */ s.d.$tinywurtle.clone(t_resumeCtx_7));
  return a_gameactorsinit$5;
  } else {
  (s.pc = "x2n4S22didKZHAyC");
  var t_call_15 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_rectangle(40, 8, s));
  s.rt.markAllocated(t_call_15);
  (/* power up */ s.d.$powerup = t_call_15);
  s.rt.logDataWrite();
  (s.pc = "D17oeUtjodZuja1c");
  var t_call_16 = lib.Colors.orange(s);
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok2(s, /* power up */ s.d.$powerup, t_call_16) && /* power up */ s.d.$powerup.set_color(t_call_16, s));
  }
  return a_gameactorsinit$4;
}
cs.registerStep(a_gameactorsinit$2, 'a_gameactorsinit$2');

function a_gameactorsinit$5(s) {
  var t_pauseRes_9 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_9);
  (/* redturtle */ s.d.$redturtle = t_pauseRes_9);
  s.rt.logDataWrite();
  (s.pc = "rOw8lvye9XmUii5T");
  var t_call_10 = lib.Colors.red(s);
  s.rt.logObjectMutation(/* redturtle */ s.d.$redturtle);
  var t_resumeCtx_11 = s.rt.getBlockingResumeCtx(a_gameactorsinit$6);
  (ok2(s, /* redturtle */ s.d.$redturtle, t_call_10) && /* redturtle */ s.d.$redturtle.tint(t_call_10, t_resumeCtx_11));
  return a_gameactorsinit$6;
}
cs.registerStep(a_gameactorsinit$5, 'a_gameactorsinit$5');

function a_gameactorsinit$4(s) {
  (s.pc = "xP9LpEBiAsxQA3vy");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_gameactorsinit$4, 'a_gameactorsinit$4');

function a_gameactorsinit$6(s) {
  (s.pc = "xyMrpeSghUwpHVYN");
  var t_resumeCtx_12 = s.rt.getBlockingResumeCtx(a_gameactorsinit$7);
  var t_call_13 = (ok2(s, /* board */ s.d.$board, /* tiny carrot */ s.d.$tinycarrot) && /* board */ s.d.$board.create_picture(/* tiny carrot */ s.d.$tinycarrot, t_resumeCtx_12));
  return a_gameactorsinit$7;
}
cs.registerStep(a_gameactorsinit$6, 'a_gameactorsinit$6');

function a_gameactorsinit$7(s) {
  var t_pauseRes_14 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_14);
  (/* power up */ s.d.$powerup = t_pauseRes_14);
  s.rt.logDataWrite();
  return a_gameactorsinit$4;
}
cs.registerStep(a_gameactorsinit$7, 'a_gameactorsinit$7');

/* ACTION: turtles add */
function a_turtlesadd(previous, returnAddr, $p) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtlesadd$0;
  s.name = "turtles add";
  s.$p = $p;
  s.$x = undefined;
  s.$y = undefined;
  s.$i = undefined;
  return s;
}
cs.registerAction("turtles add", "turtlesadd", a_turtlesadd, true);

function a_turtlesadd$0(s) {
  (s.pc = "CqvI4rlh3JNCln2h");
  return s.rt.enter(a_soundplay(s, a_turtlesadd$2, /* enemy entry */ s.d.$enemyentry));
}
cs.registerStep(a_turtlesadd$0, 'a_turtlesadd$0');

function a_turtlesadd$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "AQLhXqdIslXTHj5s");
  (s.$x = 0);
  (s.pc = "jVZfT4W20P8j5eKG");
  (s.$y = 0);
  var t_elseIf_1 = true;
  (s.pc = "UZXnjm1cNLbQctCX");
  var t_call_2 = lib.Math_.random(100, s);
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 > 50));
  ok1(s, t_infix_3);
  if (t_infix_3) {
  (s.pc = "xo84KY1VN4Drje26");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_5 = (7 / 8);
  var t_infix_6 = (ok2(s, t_call_4, t_infix_5) && (t_call_4 * t_infix_5));
  (s.$x = t_infix_6);
  } else {
  (s.pc = "rFe8S7AZcv8i4Orb");
  null;
  }
  var t_elseIf_7 = true;
  (s.pc = "gR2ZpneyTjyQ7r1c");
  var t_call_8 = lib.Math_.random(100, s);
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 > 50));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "EHlYoreREG0krFDf");
  var t_call_10 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_11 = (7 / 8);
  var t_infix_12 = (ok2(s, t_call_10, t_infix_11) && (t_call_10 * t_infix_11));
  (s.$y = t_infix_12);
  } else {
  (s.pc = "j92dhtin2lFSpolg");
  null;
  }
  (s.pc = "DxT2RN1TtzQqQk8j");
  s.t_bnd_13 = s.$p;
  (s.$i = 0);
  return a_turtlesadd$5;
}
cs.registerStep(a_turtlesadd$2, 'a_turtlesadd$2');

function a_turtlesadd$5(s) {
  if ((s.$i < s.t_bnd_13)) {
  (s.pc = "xxgiDGyexNIvMiBS");
  return s.rt.enter(a_turtleadd(s, a_turtlesadd$9, s.$x, s.$y));
  }
  return s.rt.leave();
}
cs.registerStep(a_turtlesadd$5, 'a_turtlesadd$5');

function a_turtlesadd$9(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  (s.$i++);
  return a_turtlesadd$5;
}
cs.registerStep(a_turtlesadd$9, 'a_turtlesadd$9');

/* ACTION: turtles update */
function a_turtlesupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtlesupdate$0;
  s.name = "turtles update";
  s.$e = undefined;
  return s;
}
cs.registerAction("turtles update", "turtlesupdate", a_turtlesupdate, true);

function a_turtlesupdate$0(s) {
  (s.pc = "mQXTnQtZdtOKtqkb");
  s.t_collArr_0 = (ok1(s, /* turtles */ s.d.$turtles) && /* turtles */ s.d.$turtles.get_enumerator());
  s.t_idx_1 = 0;
  return a_turtlesupdate$3;
}
cs.registerStep(a_turtlesupdate$0, 'a_turtlesupdate$0');

function a_turtlesupdate$3(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$e = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  (s.pc = "osX2528CM59pNROi");
  return s.rt.enter(a_turtleupdate(s, a_turtlesupdate$5, s.$e));
  }
  return s.rt.leave();
}
cs.registerStep(a_turtlesupdate$3, 'a_turtlesupdate$3');

function a_turtlesupdate$5(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_turtlesupdate$3;
}
cs.registerStep(a_turtlesupdate$5, 'a_turtlesupdate$5');

/* ACTION: gate add */
function a_gateadd(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gateadd$0;
  s.name = "gate add";
  s.$bar = undefined;
  s.$bomb1 = undefined;
  s.$bomb2 = undefined;
  s.$b = undefined;
  s.$b2 = undefined;
  s.$sprdec = undefined;
  return s;
}
cs.registerAction("gate add", "gateadd", a_gateadd, true);

function a_gateadd$0(s) {
  (s.pc = "jNEUI4sj8NbE325v");
  return s.rt.enter(a_gatebaradd(s, a_gateadd$2));
}
cs.registerStep(a_gateadd$0, 'a_gateadd$0');

function a_gateadd$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  (s.$bar = t_actRes_0);
  (s.pc = "xfiw2uKIGvBR9omm");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_ellipse(12, 12, s));
  s.rt.markAllocated(t_call_1);
  (s.$bomb1 = t_call_1);
  (s.pc = "xT1LEq8ag0dQJZ2I");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_ellipse(12, 12, s));
  s.rt.markAllocated(t_call_2);
  (s.$bomb2 = t_call_2);
  (s.pc = "xC4MzirFKO8HHzb8");
  s.rt.logObjectMutation(/* bombs */ s.d.$bombs);
  var t_call_3 = (ok2(s, /* bombs */ s.d.$bombs, s.$bomb1) && /* bombs */ s.d.$bombs.add(s.$bomb1, s));
  (s.$b = t_call_3);
  (s.pc = "siehIDJyl9ECsZCA");
  s.rt.logObjectMutation(/* bombs */ s.d.$bombs);
  var t_call_4 = (ok2(s, /* bombs */ s.d.$bombs, s.$bomb2) && /* bombs */ s.d.$bombs.add(s.$bomb2, s));
  (s.$b2 = t_call_4);
  (s.pc = "d3ArSTfJ4b4S4ank");
  var t_call_5 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$bar) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$bar, s));
  (s.$sprdec = t_call_5);
  (s.pc = "ffHBvaOkL51dZF4y");
  if (s.$sprdec) {
  s.$sprdec.perform_set("Ld20rZd6ffxy3foc", s.$bomb1, s);
  }
  (s.pc = "SKaPGNvO4w5K6C2I");
  if (s.$sprdec) {
  s.$sprdec.perform_set("F0T4JH1Mf01k1rr9", s.$bomb2, s);
  }
  (s.pc = "jUcSK17t4ydVnA8n");
  var t_call_6 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$bomb1) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$bomb1, s));
  if (t_call_6) {
  t_call_6.perform_set("Ld20rZd6ffxy3foc", s.$bar, s);
  }
  (s.pc = "xkh8TuYVMZsVFb21");
  var t_call_7 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$bomb2) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$bomb2, s));
  if (t_call_7) {
  t_call_7.perform_set("Ld20rZd6ffxy3foc", s.$bar, s);
  }
  (s.pc = "xv4Z9anxQez0jbOs");
  return s.rt.enter(a_gatebombsupdate(s, a_gateadd$7, s.$bar));
}
cs.registerStep(a_gateadd$2, 'a_gateadd$2');

function a_gateadd$7(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return s.rt.leave();
}
cs.registerStep(a_gateadd$7, 'a_gateadd$7');

/* ACTION: turtle kill */
function a_turtlekill(previous, returnAddr, $turtle) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtlekill$0;
  s.name = "turtle kill";
  s.$turtle = $turtle;
  s.$dec = undefined;
  return s;
}
cs.registerAction("turtle kill", "turtlekill", a_turtlekill, true);

function a_turtlekill$0(s) {
  (s.pc = "B84RF8f7PwqZUaz2");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$turtle) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$turtle, s));
  (s.$dec = t_call_0);
  var t_elseIf_1 = true;
  (s.pc = "Pj4uS484i80KBDN7");
  if (s.$dec) {
  var t_recOp_2 = s.$dec.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  ok1(s, t_recOp_2);
  if (t_recOp_2) {
  var t_elseIf_3 = true;
  (s.pc = "dU4DA1DiSJBV8tPa");
  var t_call_4 = (ok1(s, s.$turtle) && s.$turtle.opacity(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 - 0.2));
  var t_infix_6 = (ok1(s, t_infix_5) && (t_infix_5 > 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "xeXEzg259UXhSoKa");
  var t_call_7 = (ok1(s, s.$turtle) && s.$turtle.opacity(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 - 0.3));
  s.rt.logObjectMutation(s.$turtle);
  (ok2(s, s.$turtle, t_infix_8) && s.$turtle.set_opacity(t_infix_8, s));
  } else {
  (s.pc = "xtp9gsibJhHOin3c");
  s.rt.logObjectMutation(/* turtles */ s.d.$turtles);
  var t_call_9 = (ok2(s, /* turtles */ s.d.$turtles, s.$turtle) && /* turtles */ s.d.$turtles.remove(s.$turtle, s));
  t_call_9;
  (s.pc = "f2S0fwgy2MZr5oG7");
  s.rt.logObjectMutation(s.$turtle);
  (ok1(s, s.$turtle) && s.$turtle.delete_(s));
  var t_elseIf_10 = true;
  (s.pc = "iqdRcS0MCi2ysuNt");
  if (/* options */ s.d.$options) {
  var t_recOp_11 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_11);
  if (t_recOp_11) {
  (s.pc = "OPVoXLuJNGHmUCcT");
  return s.rt.enter(a_spritetopic(s, a_turtlekill$7, s.$turtle));
  } else {
  (s.pc = "YcbFhCaMUGP0M3fX");
  null;
  }
  return a_turtlekill$6;
  }
  return a_turtlekill$4;
  } else {
  (s.pc = "OtkTbvKh1ciG4wGI");
  if (s.$dec) {
  s.$dec.perform_set("ihmdFpqLyY4EhWsv", true, s);
  }
  (s.pc = "D5DFtSHABm5rViVl");
  s.rt.logObjectMutation(s.$turtle);
  (ok1(s, s.$turtle) && s.$turtle.set_speed(0, 0, s));
  (s.pc = "qqYgxkWsifz6FelB");
  return s.rt.enter(a_shelladd(s, a_turtlekill$9, s.$turtle));
  }
  return a_turtlekill$3;
}
cs.registerStep(a_turtlekill$0, 'a_turtlekill$0');

function a_turtlekill$7(s) {
  var t_actRes_12 = s.rt.returnedFrom.result;
  s.rt.logObjectMutation(t_actRes_12);
  (ok1(s, t_actRes_12) && t_actRes_12.delete_(s));
  return a_turtlekill$6;
}
cs.registerStep(a_turtlekill$7, 'a_turtlekill$7');

function a_turtlekill$6(s) {
  return a_turtlekill$4;
}
cs.registerStep(a_turtlekill$6, 'a_turtlekill$6');

function a_turtlekill$4(s) {
  return a_turtlekill$3;
}
cs.registerStep(a_turtlekill$4, 'a_turtlekill$4');

function a_turtlekill$9(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  (s.pc = "IIzgI8N3J2UajD2K");
  return s.rt.enter(a_shelladd(s, a_turtlekill$10, s.$turtle));
}
cs.registerStep(a_turtlekill$9, 'a_turtlekill$9');

function a_turtlekill$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_turtlekill$3, 'a_turtlekill$3');

function a_turtlekill$10(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  (s.pc = "fK84xTkKOlM5LW1C");
  return s.rt.enter(a_bannerscoreincrease(s, a_turtlekill$11, 5));
}
cs.registerStep(a_turtlekill$10, 'a_turtlekill$10');

function a_turtlekill$11(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  t_actRes_15;
  return a_turtlekill$3;
}
cs.registerStep(a_turtlekill$11, 'a_turtlekill$11');

/* ACTION: gate explode */
function a_gateexplode(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gateexplode$0;
  s.name = "gate explode";
  s.$gate = $gate;
  s.$x = undefined;
  return s;
}
cs.registerAction("gate explode", "gateexplode", a_gateexplode, true);

function a_gateexplode$0(s) {
  (s.pc = "xV1crmhppCyWeVh9");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  (s.$x = t_call_0);
  var t_elseIf_1 = true;
  (s.pc = "ZJ4VMxu5cJj6Ncb4");
  if (s.$x) {
  var t_recOp_2 = s.$x.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  ok1(s, t_recOp_2);
  if (t_recOp_2) {
  (s.pc = "JGx4Evunx48TV3rZ");
  return s.rt.enter(a_gatebombsexplode(s, a_gateexplode$4, s.$gate));
  } else {
  (s.pc = "xgz1urGcMh836UD4");
  if (s.$x) {
  s.$x.perform_set("ihmdFpqLyY4EhWsv", true, s);
  }
  (s.pc = "ndJ3MmgdKpqM2fTZ");
  s.rt.logObjectMutation(s.$gate);
  (ok1(s, s.$gate) && s.$gate.hide(s));
  }
  return a_gateexplode$3;
}
cs.registerStep(a_gateexplode$0, 'a_gateexplode$0');

function a_gateexplode$4(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return a_gateexplode$3;
}
cs.registerStep(a_gateexplode$4, 'a_gateexplode$4');

function a_gateexplode$3(s) {
  (s.pc = "iv4YpJkXd4dmJ0eU");
  null;
  return s.rt.leave();
}
cs.registerStep(a_gateexplode$3, 'a_gateexplode$3');

/* ACTION: rabbit add */
function a_rabbitadd(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rabbitadd$0;
  s.name = "rabbit add";
  s.$pic = undefined;
  return s;
}
cs.registerAction("rabbit add", "rabbitadd", a_rabbitadd, true);

function a_rabbitadd$0(s) {
  (s.pc = "jlNEEcMBXhryNJVA");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_ellipse(24, 24, s));
  s.rt.markAllocated(t_call_0);
  (/* rabbit */ s.d.$rabbit = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "ZBeywtyBGpaoWzWG");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 / 2));
  var t_call_3 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 2));
  s.rt.logObjectMutation(/* rabbit */ s.d.$rabbit);
  (ok3(s, /* rabbit */ s.d.$rabbit, t_infix_2, t_infix_4) && /* rabbit */ s.d.$rabbit.set_pos(t_infix_2, t_infix_4, s));
  (s.pc = "rpN8QKrBLvCUAxI8");
  var t_call_5 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_ellipse(60, 60, s));
  s.rt.markAllocated(t_call_5);
  (/* rabbit invisible large */ s.d.$rabbitinvisiblelarge = t_call_5);
  s.rt.logDataWrite();
  (s.pc = "WhXmLrXO8gCjfXJy");
  s.rt.logObjectMutation(/* rabbit invisible large */ s.d.$rabbitinvisiblelarge);
  (ok1(s, /* rabbit invisible large */ s.d.$rabbitinvisiblelarge) && /* rabbit invisible large */ s.d.$rabbitinvisiblelarge.hide(s));
  var t_elseIf_6 = true;
  (s.pc = "j5n5b1IapGcMQxSj");
  if (/* options */ s.d.$options) {
  var t_recOp_7 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_7);
  if (t_recOp_7) {
  (s.pc = "prQzEBq55Ra5x4Ex");
  var t_resumeCtx_8 = s.rt.getBlockingResumeCtx(a_rabbitadd$4);
  var t_call_9 = (ok2(s, /* board */ s.d.$board, /* tiny wabbit */ s.d.$tinywabbit) && /* board */ s.d.$board.create_picture(/* tiny wabbit */ s.d.$tinywabbit, t_resumeCtx_8));
  return a_rabbitadd$4;
  } else {
  (s.pc = "J8cGpMGsCHmdNu23");
  null;
  }
  return a_rabbitadd$3;
}
cs.registerStep(a_rabbitadd$0, 'a_rabbitadd$0');

function a_rabbitadd$4(s) {
  var t_pauseRes_10 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_10);
  (s.$pic = t_pauseRes_10);
  (s.pc = "l9Pq3OEZ4YBCi0Z2");
  var t_call_11 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, /* rabbit */ s.d.$rabbit) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(/* rabbit */ s.d.$rabbit, s));
  if (t_call_11) {
  t_call_11.perform_set("Ld20rZd6ffxy3foc", s.$pic, s);
  }
  (s.pc = "VlQz3NnaL2DZUfG3");
  s.rt.logObjectMutation(/* rabbit */ s.d.$rabbit);
  (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.hide(s));
  return a_rabbitadd$3;
}
cs.registerStep(a_rabbitadd$4, 'a_rabbitadd$4');

function a_rabbitadd$3(s) {
  (s.pc = "ak6H2EQhJMaZu8Vm");
  var t_call_12 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_ellipse(24, 24, s));
  s.rt.markAllocated(t_call_12);
  (/* rabbit move to */ s.d.$rabbitmoveto = t_call_12);
  s.rt.logDataWrite();
  (s.pc = "XsLl2xKOwSAq1mA2");
  s.rt.logObjectMutation(/* rabbit move to */ s.d.$rabbitmoveto);
  (ok1(s, /* rabbit move to */ s.d.$rabbitmoveto) && /* rabbit move to */ s.d.$rabbitmoveto.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_rabbitadd$3, 'a_rabbitadd$3');

/* ACTION: game board init */
function a_gameboardinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameboardinit$0;
  s.name = "game board init";
  return s;
}
cs.registerAction("game board init", "gameboardinit", a_gameboardinit, true);

function a_gameboardinit$0(s) {
  (s.pc = "B7HlDVVtah16EEtV");
  var t_call_0 = lib.Colors.black(s);
  (ok1(s, t_call_0) && lib.Wall.set_background(t_call_0, s));
  (s.pc = "Pb5kzHrfTeiBmAF3");
  var t_call_1 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_1);
  (/* board */ s.d.$board = t_call_1);
  s.rt.logDataWrite();
  (s.pc = "fSJ41l34nQg8BWdv");
  return s.rt.enter(a_gameboundaryinit(s, a_gameboardinit$2));
}
cs.registerStep(a_gameboardinit$0, 'a_gameboardinit$0');

function a_gameboardinit$2(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "xEoNZWyUt6FZX47z");
  return s.rt.enter(a_bannerinit(s, a_gameboardinit$3));
}
cs.registerStep(a_gameboardinit$2, 'a_gameboardinit$2');

function a_gameboardinit$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "zUpd4LszPpTyGOeQ");
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.post_to_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_gameboardinit$3, 'a_gameboardinit$3');

/* ACTION: gates update */
function a_gatesupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatesupdate$0;
  s.name = "gates update";
  s.$gate = undefined;
  return s;
}
cs.registerAction("gates update", "gatesupdate", a_gatesupdate, true);

function a_gatesupdate$0(s) {
  (s.pc = "KX4vL1zRcIPDDjkZ");
  s.t_collArr_0 = (ok1(s, /* gates */ s.d.$gates) && /* gates */ s.d.$gates.get_enumerator());
  s.t_idx_1 = 0;
  return a_gatesupdate$3;
}
cs.registerStep(a_gatesupdate$0, 'a_gatesupdate$0');

function a_gatesupdate$3(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$gate = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  (s.pc = "yogtguTsaz9buxMX");
  return s.rt.enter(a_gateupdate(s, a_gatesupdate$5, s.$gate));
  }
  return s.rt.leave();
}
cs.registerStep(a_gatesupdate$3, 'a_gatesupdate$3');

function a_gatesupdate$5(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_gatesupdate$3;
}
cs.registerStep(a_gatesupdate$5, 'a_gatesupdate$5');

/* ACTION: gate bombs update */
function a_gatebombsupdate(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebombsupdate$0;
  s.name = "gate bombs update";
  s.$gate = $gate;
  s.$x = undefined;
  s.$y = undefined;
  s.$hyp = undefined;
  s.$angle = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$x3 = undefined;
  s.$y3 = undefined;
  return s;
}
cs.registerAction("gate bombs update", "gatebombsupdate", a_gatebombsupdate, true);

function a_gatebombsupdate$0(s) {
  (s.pc = "PPcIOToUK6Psrlbf");
  var t_call_0 = (ok1(s, s.$gate) && s.$gate.x(s));
  (s.$x = t_call_0);
  (s.pc = "VO23L0uX9lc7MbMH");
  var t_call_1 = (ok1(s, s.$gate) && s.$gate.y(s));
  (s.$y = t_call_1);
  (s.pc = "FZnCLf5yxZGkBE5Y");
  var t_call_2 = (ok1(s, s.$gate) && s.$gate.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 2));
  (s.$hyp = t_infix_3);
  (s.pc = "NbpRr2Vqyxz51PKY");
  var t_call_4 = (ok1(s, s.$gate) && s.$gate.angle(s));
  var t_call_5 = (ok1(s, t_call_4) && lib.Math_.deg_to_rad(t_call_4, s));
  (s.$angle = t_call_5);
  (s.pc = "vXB2w0yL9xNOz0ck");
  var t_call_6 = (ok1(s, s.$angle) && lib.Math_.cos(s.$angle, s));
  var t_infix_7 = (ok2(s, t_call_6, s.$hyp) && (t_call_6 * s.$hyp));
  var t_infix_8 = (ok2(s, s.$x, t_infix_7) && (s.$x + t_infix_7));
  (s.$x2 = t_infix_8);
  (s.pc = "xUKOC4d5u5vS1Bjj");
  var t_call_9 = (ok1(s, s.$angle) && lib.Math_.sin(s.$angle, s));
  var t_infix_10 = (ok2(s, t_call_9, s.$hyp) && (t_call_9 * s.$hyp));
  var t_infix_11 = (ok2(s, s.$y, t_infix_10) && (s.$y + t_infix_10));
  (s.$y2 = t_infix_11);
  (s.pc = "wj2SnO2apuv9pg0a");
  var t_call_12 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  if (t_call_12) {
  var t_recOp_13 = t_call_12.perform_get("Ld20rZd6ffxy3foc", s);
  }
  s.rt.logObjectMutation(t_recOp_13);
  (ok3(s, t_recOp_13, s.$x2, s.$y2) && t_recOp_13.set_pos(s.$x2, s.$y2, s));
  (s.pc = "WdJrjARBvFNzMWxG");
  var t_call_14 = (ok1(s, s.$angle) && lib.Math_.cos(s.$angle, s));
  var t_infix_15 = (ok2(s, t_call_14, s.$hyp) && (t_call_14 * s.$hyp));
  var t_infix_16 = (ok2(s, s.$x, t_infix_15) && (s.$x - t_infix_15));
  (s.$x3 = t_infix_16);
  (s.pc = "FHhdf54XfOoARHd2");
  var t_call_17 = (ok1(s, s.$angle) && lib.Math_.sin(s.$angle, s));
  var t_infix_18 = (ok2(s, t_call_17, s.$hyp) && (t_call_17 * s.$hyp));
  var t_infix_19 = (ok2(s, s.$y, t_infix_18) && (s.$y - t_infix_18));
  (s.$y3 = t_infix_19);
  (s.pc = "P2c0mfS8dQ1hJ659");
  var t_call_20 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  if (t_call_20) {
  var t_recOp_21 = t_call_20.perform_get("F0T4JH1Mf01k1rr9", s);
  }
  s.rt.logObjectMutation(t_recOp_21);
  (ok3(s, t_recOp_21, s.$x3, s.$y3) && t_recOp_21.set_pos(s.$x3, s.$y3, s));
  return s.rt.leave();
}
cs.registerStep(a_gatebombsupdate$0, 'a_gatebombsupdate$0');


//Ent_BU3ByaXRlIGRlY29yYXRvcgaa
function Ent_BU3ByaXRlIGRlY29yYXRvcgaa(p) {
  this.parent = p;
}
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype = new lib.DecoratorEntry();
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.keys = ["xYiba50eN7xTThQw"];
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.values = ["Ld20rZd6ffxy3foc", "F0T4JH1Mf01k1rr9", "ihmdFpqLyY4EhWsv"];
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.fields = ["xYiba50eN7xTThQw", "Ld20rZd6ffxy3foc", "F0T4JH1Mf01k1rr9", "ihmdFpqLyY4EhWsv"];
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype["xYiba50eN7xTThQw_realname"] = "target";
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype["Ld20rZd6ffxy3foc_realname"] = "spr1";
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype["F0T4JH1Mf01k1rr9_realname"] = "spr2";
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype["ihmdFpqLyY4EhWsv_realname"] = "exploding";
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype["ihmdFpqLyY4EhWsv"] = false;
//Tbl_BU3ByaXRlIGRlY29yYXRvcgaa
function Tbl_BU3ByaXRlIGRlY29yYXRvcgaa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BU3ByaXRlIGRlY29yYXRvcgaa.prototype = new lib.DecoratorSingleton();
Tbl_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.entryCtor = Ent_BU3ByaXRlIGRlY29yYXRvcgaa;
cs.objectSingletons["thing"] = function(d) { return d.$BU3ByaXRlIGRlY29yYXRvcgaa };
Tbl_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.selfCtor = Tbl_BU3ByaXRlIGRlY29yYXRvcgaa;
Tbl_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.stableName = "BU3ByaXRlIGRlY29yYXRvcgaa";
Tbl_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.entryKindName = "thing";

// jsonimport
Ent_BU3ByaXRlIGRlY29yYXRvcgaa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("ihmdFpqLyY4EhWsv", ctx.importBoolean(json, "exploding"), s);
}
cs.registerGlobal("$BU3ByaXRlIGRlY29yYXRvcgaa");
/* ACTION: game postprocess */
function a_gamepostprocess(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamepostprocess$0;
  s.name = "game postprocess";
  s.$turtle = undefined;
  s.$sprite2 = undefined;
  s.$gate = undefined;
  return s;
}
cs.registerAction("game postprocess", "gamepostprocess", a_gamepostprocess, true);

function a_gamepostprocess$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "DvXhHIKhXE6Q69X3");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "qxWVk4TZkK5frW2d");
  return s.rt.enter(a_spritetopic(s, a_gamepostprocess$4, /* rabbit */ s.d.$rabbit));
  } else {
  (s.pc = "EiAWebjG2u5Y9bdH");
  null;
  }
  return a_gamepostprocess$3;
}
cs.registerStep(a_gamepostprocess$0, 'a_gamepostprocess$0');

function a_gamepostprocess$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  var t_call_3 = (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.x(s));
  var t_call_4 = (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.y(s));
  s.rt.logObjectMutation(t_actRes_2);
  (ok3(s, t_actRes_2, t_call_3, t_call_4) && t_actRes_2.set_pos(t_call_3, t_call_4, s));
  (s.pc = "xUNFDWqCF9II8crE");
  s.t_collArr_5 = (ok1(s, /* turtles */ s.d.$turtles) && /* turtles */ s.d.$turtles.get_enumerator());
  s.t_idx_6 = 0;
  return a_gamepostprocess$6;
}
cs.registerStep(a_gamepostprocess$4, 'a_gamepostprocess$4');

function a_gamepostprocess$3(s) {
  (s.pc = "JVHBL4RjBnpfhxpV");
  s.t_collArr_11 = (ok1(s, /* gates */ s.d.$gates) && /* gates */ s.d.$gates.get_enumerator());
  s.t_idx_12 = 0;
  return a_gamepostprocess$10;
}
cs.registerStep(a_gamepostprocess$3, 'a_gamepostprocess$3');

function a_gamepostprocess$6(s) {
  if ((s.t_idx_6 < (s.t_collArr_5.length))) {
  (s.$turtle = s.t_collArr_5[(s.t_idx_6)]);
  (s.t_idx_6++);
  (s.pc = "Ggh22uxDxlsVgjcJ");
  return s.rt.enter(a_spritetopic(s, a_gamepostprocess$8, s.$turtle));
  }
  return a_gamepostprocess$3;
}
cs.registerStep(a_gamepostprocess$6, 'a_gamepostprocess$6');

function a_gamepostprocess$10(s) {
  if ((s.t_idx_12 < (s.t_collArr_11.length))) {
  (s.$gate = s.t_collArr_11[(s.t_idx_12)]);
  (s.t_idx_12++);
  (s.pc = "gl45blGrtiH027Ps");
  return s.rt.enter(a_gatebombsupdate(s, a_gamepostprocess$12, s.$gate));
  }
  return s.rt.leave();
}
cs.registerStep(a_gamepostprocess$10, 'a_gamepostprocess$10');

function a_gamepostprocess$8(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  (s.$sprite2 = t_actRes_7);
  (s.pc = "z2n2FzlT20Otih8D");
  var t_call_8 = (ok1(s, s.$turtle) && s.$turtle.x(s));
  var t_call_9 = (ok1(s, s.$turtle) && s.$turtle.y(s));
  s.rt.logObjectMutation(s.$sprite2);
  (ok3(s, s.$sprite2, t_call_8, t_call_9) && s.$sprite2.set_pos(t_call_8, t_call_9, s));
  (s.pc = "XBe2d8X0FVhxP4dv");
  var t_call_10 = (ok1(s, s.$turtle) && s.$turtle.opacity(s));
  s.rt.logObjectMutation(s.$sprite2);
  (ok2(s, s.$sprite2, t_call_10) && s.$sprite2.set_opacity(t_call_10, s));
  return a_gamepostprocess$6;
}
cs.registerStep(a_gamepostprocess$8, 'a_gamepostprocess$8');

function a_gamepostprocess$12(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  return a_gamepostprocess$10;
}
cs.registerStep(a_gamepostprocess$12, 'a_gamepostprocess$12');

/* ACTION: turtles kill */
function a_turtleskill(previous, returnAddr, $turtles) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtleskill$0;
  s.name = "turtles kill";
  s.$turtles = $turtles;
  s.$e = undefined;
  return s;
}
cs.registerAction("turtles kill", "turtleskill", a_turtleskill, true);

function a_turtleskill$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "MJP5uXunHlbRDVWS");
  var t_call_1 = (ok1(s, s.$turtles) && s.$turtles.count(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 > 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "NN3Jc7PrjIBDMKC0");
  return s.rt.enter(a_soundplay(s, a_turtleskill$3, /* turtle Squish */ s.d.$turtleSquish));
  } else {
  (s.pc = "KIAhVgWeFvx1nF8J");
  null;
  }
  return a_turtleskill$2;
}
cs.registerStep(a_turtleskill$0, 'a_turtleskill$0');

function a_turtleskill$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "CPPQLRitmAfzOfmV");
  s.t_collArr_4 = (ok1(s, s.$turtles) && s.$turtles.get_enumerator());
  s.t_idx_5 = 0;
  return a_turtleskill$5;
}
cs.registerStep(a_turtleskill$3, 'a_turtleskill$3');

function a_turtleskill$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_turtleskill$2, 'a_turtleskill$2');

function a_turtleskill$5(s) {
  if ((s.t_idx_5 < (s.t_collArr_4.length))) {
  (s.$e = s.t_collArr_4[(s.t_idx_5)]);
  (s.t_idx_5++);
  (s.pc = "tLu4FjCyqbtDMpuv");
  return s.rt.enter(a_turtlekill(s, a_turtleskill$7, s.$e));
  }
  return a_turtleskill$2;
}
cs.registerStep(a_turtleskill$5, 'a_turtleskill$5');

function a_turtleskill$7(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  return a_turtleskill$5;
}
cs.registerStep(a_turtleskill$7, 'a_turtleskill$7');

/* ACTION: shell add */
function a_shelladd(previous, returnAddr, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_shelladd$0;
  s.name = "shell add";
  s.$sprite = $sprite;
  s.$shell = undefined;
  return s;
}
cs.registerAction("shell add", "shelladd", a_shelladd, true);

function a_shelladd$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xrHG2IS2b2pVwcGz");
  var t_call_1 = (ok1(s, /* shells */ s.d.$shells) && /* shells */ s.d.$shells.count(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 40));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "kw2B2sZf5xzg8nPn");
  var t_call_3 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_rectangle(6, 6, s));
  s.rt.markAllocated(t_call_3);
  (s.$shell = t_call_3);
  (s.pc = "QOH2JYUp7yAhsVvO");
  s.rt.logObjectMutation(/* shells */ s.d.$shells);
  var t_call_4 = (ok2(s, /* shells */ s.d.$shells, s.$shell) && /* shells */ s.d.$shells.add(s.$shell, s));
  t_call_4;
  (s.pc = "HprpHVVQVJv55RF6");
  s.rt.logObjectMutation(s.$shell);
  (ok1(s, s.$shell) && s.$shell.set_opacity(1, s));
  (s.pc = "wlcf4vBYpm20c7RZ");
  var t_call_5 = lib.Colors.green(s);
  s.rt.logObjectMutation(s.$shell);
  (ok2(s, s.$shell, t_call_5) && s.$shell.set_color(t_call_5, s));
  (s.pc = "BZJ0EO8Pf5psilkJ");
  var t_call_6 = (ok1(s, s.$sprite) && s.$sprite.x(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 - 5));
  var t_call_8 = lib.Math_.random(10, s);
  var t_infix_9 = (ok2(s, t_infix_7, t_call_8) && (t_infix_7 + t_call_8));
  var t_call_10 = (ok1(s, s.$sprite) && s.$sprite.y(s));
  var t_infix_11 = (ok1(s, t_call_10) && (t_call_10 - 5));
  var t_call_12 = lib.Math_.random(10, s);
  var t_infix_13 = (ok2(s, t_infix_11, t_call_12) && (t_infix_11 + t_call_12));
  s.rt.logObjectMutation(s.$shell);
  (ok3(s, s.$shell, t_infix_9, t_infix_13) && s.$shell.set_pos(t_infix_9, t_infix_13, s));
  (s.pc = "Y2Bkp7RAwNeL2mF2");
  var t_infix_14 = (0 - 15);
  var t_call_15 = lib.Math_.random(30, s);
  var t_infix_16 = (ok2(s, t_infix_14, t_call_15) && (t_infix_14 + t_call_15));
  s.rt.logObjectMutation(s.$shell);
  (ok2(s, s.$shell, t_infix_16) && s.$shell.set_angular_speed(t_infix_16, s));
  (s.pc = "MSnjy3orcqXkOENp");
  var t_infix_17 = (0 - 15);
  var t_call_18 = lib.Math_.random(30, s);
  var t_infix_19 = (ok2(s, t_infix_17, t_call_18) && (t_infix_17 + t_call_18));
  var t_infix_20 = (0 - 15);
  var t_call_21 = lib.Math_.random(30, s);
  var t_infix_22 = (ok2(s, t_infix_20, t_call_21) && (t_infix_20 + t_call_21));
  s.rt.logObjectMutation(s.$shell);
  (ok3(s, s.$shell, t_infix_19, t_infix_22) && s.$shell.set_speed(t_infix_19, t_infix_22, s));
  } else {
  (s.pc = "mf1Yk45UXTDIIjwm");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_shelladd$0, 'a_shelladd$0');

cs.registerArtResource("Picture", "$wabbit", ".\u002fart\u002fl0_wabbit");
cs.registerArtResource("Picture", "$wurtle", ".\u002fart\u002fl0_wurtle");
/* ACTION: shells update */
function a_shellsupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_shellsupdate$0;
  s.name = "shells update";
  s.$shell = undefined;
  return s;
}
cs.registerAction("shells update", "shellsupdate", a_shellsupdate, true);

function a_shellsupdate$0(s) {
  (s.pc = "HOA9H0PbKoVmgqpx");
  s.t_collArr_0 = (ok1(s, /* shells */ s.d.$shells) && /* shells */ s.d.$shells.get_enumerator());
  s.t_idx_1 = 0;
  return a_shellsupdate$3;
}
cs.registerStep(a_shellsupdate$0, 'a_shellsupdate$0');

function a_shellsupdate$3(s) {
  if ((s.t_idx_1 < (s.t_collArr_0.length))) {
  (s.$shell = s.t_collArr_0[(s.t_idx_1)]);
  (s.t_idx_1++);
  (s.pc = "NHaNnc1iNWg5q4kf");
  return s.rt.enter(a_shellupdate(s, a_shellsupdate$5, s.$shell));
  }
  return s.rt.leave();
}
cs.registerStep(a_shellsupdate$3, 'a_shellsupdate$3');

function a_shellsupdate$5(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  return a_shellsupdate$3;
}
cs.registerStep(a_shellsupdate$5, 'a_shellsupdate$5');

/* ACTION: rabbit update */
function a_rabbitupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rabbitupdate$0;
  s.name = "rabbit update";
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("rabbit update", "rabbitupdate", a_rabbitupdate, true);

function a_rabbitupdate$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "Vn2AZx5RBqDLlyQy");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.touched(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "fJ61s4Gf1mGsqCCC");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.touch_current(s));
  var t_call_3 = (ok1(s, t_call_2) && t_call_2.x(s));
  (s.$x = t_call_3);
  (s.pc = "HuA4areV4hF7bC0D");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.touch_current(s));
  var t_call_5 = (ok1(s, t_call_4) && t_call_4.y(s));
  (s.$y = t_call_5);
  var t_elseIf_6 = true;
  (s.pc = "ulSO4RPjXDoShUUp");
  var t_call_7 = (ok1(s, s.$x) && lib.Math_.is_nan(s.$x, s));
  var t_lazy_8 = t_call_7;
  if ((ok1(s, t_lazy_8) && (!t_lazy_8))) {
  var t_call_9 = (ok1(s, s.$y) && lib.Math_.is_nan(s.$y, s));
  (t_lazy_8 = t_call_9);
  }
  var t_call_10 = (ok1(s, t_lazy_8) && lib.Boolean_.not(t_lazy_8, s));
  ok1(s, t_call_10);
  if (t_call_10) {
  (s.pc = "QhPN3A2nYWxBEWyz");
  s.rt.logObjectMutation(/* rabbit move to */ s.d.$rabbitmoveto);
  (ok3(s, /* rabbit move to */ s.d.$rabbitmoveto, s.$x, s.$y) && /* rabbit move to */ s.d.$rabbitmoveto.set_pos(s.$x, s.$y, s));
  (s.pc = "Pt2lcxD675af4GRZ");
  s.rt.logObjectMutation(/* rabbit */ s.d.$rabbit);
  (ok2(s, /* rabbit */ s.d.$rabbit, /* rabbit move to */ s.d.$rabbitmoveto) && /* rabbit */ s.d.$rabbit.speed_towards(/* rabbit move to */ s.d.$rabbitmoveto, 250, s));
  } else {
  (s.pc = "ragao6eSZHq22zhf");
  s.rt.logObjectMutation(/* rabbit */ s.d.$rabbit);
  (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.set_speed(0, 0, s));
  }
  } else {
  (s.pc = "HcOOqP632wJaKLJm");
  s.rt.logObjectMutation(/* rabbit */ s.d.$rabbit);
  (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.set_speed(0, 0, s));
  }
  return s.rt.leave();
}
cs.registerStep(a_rabbitupdate$0, 'a_rabbitupdate$0');

/* ACTION: turtle add */
function a_turtleadd(previous, returnAddr, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtleadd$0;
  s.name = "turtle add";
  s.$x = $x;
  s.$y = $y;
  s.$spr = undefined;
  s.$x2 = undefined;
  s.$y2 = undefined;
  s.$dec = undefined;
  s.$turtle = undefined;
  return s;
}
cs.registerAction("turtle add", "turtleadd", a_turtleadd, true);

function a_turtleadd$0(s) {
  (s.pc = "yXPNhVamlsdFasn2");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_rectangle(15, 15, s));
  s.rt.markAllocated(t_call_0);
  (s.$spr = t_call_0);
  (s.pc = "VhHlqxqxmvU1HpDs");
  s.rt.logObjectMutation(s.$spr);
  (ok1(s, s.$spr) && s.$spr.set_angle(45, s));
  (s.pc = "oZU9m6J9zqEyzOOs");
  var t_call_1 = lib.Colors.blue(s);
  s.rt.logObjectMutation(s.$spr);
  (ok2(s, s.$spr, t_call_1) && s.$spr.set_color(t_call_1, s));
  (s.pc = "nDbDCXLxe6GmWImj");
  s.rt.logObjectMutation(s.$spr);
  (ok1(s, s.$spr) && s.$spr.set_opacity(0, s));
  (s.pc = "xNgVpUA2SQKgpP39");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 8));
  var t_call_4 = (ok1(s, t_infix_3) && lib.Math_.random(t_infix_3, s));
  var t_infix_5 = (ok2(s, s.$x, t_call_4) && (s.$x + t_call_4));
  (s.$x2 = t_infix_5);
  (s.pc = "H2PK9jNoadAfHoAF");
  var t_call_6 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 / 8));
  var t_call_8 = (ok1(s, t_infix_7) && lib.Math_.random(t_infix_7, s));
  var t_infix_9 = (ok2(s, s.$y, t_call_8) && (s.$y + t_call_8));
  (s.$y2 = t_infix_9);
  (s.pc = "j312txQqmLbi6y53");
  s.rt.logObjectMutation(s.$spr);
  (ok3(s, s.$spr, s.$x2, s.$y2) && s.$spr.set_pos(s.$x2, s.$y2, s));
  (s.pc = "SntFAQokRbl5qYHl");
  var t_call_10 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$spr) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$spr, s));
  (s.$dec = t_call_10);
  (s.pc = "F4bNnR7fTE4XB4o5");
  if (s.$dec) {
  s.$dec.perform_set("ihmdFpqLyY4EhWsv", false, s);
  }
  var t_elseIf_11 = true;
  (s.pc = "r6s249yBGz0boyHn");
  if (/* options */ s.d.$options) {
  var t_recOp_12 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_12);
  if (t_recOp_12) {
  (s.pc = "GWHoi0W8Ny4QReNk");
  s.rt.logObjectMutation(s.$spr);
  (ok1(s, s.$spr) && s.$spr.hide(s));
  (s.pc = "BeFjgJ8xavWZ0mci");
  var t_resumeCtx_13 = s.rt.getBlockingResumeCtx(a_turtleadd$5);
  var t_call_14 = (ok2(s, /* board */ s.d.$board, /* tiny wurtle */ s.d.$tinywurtle) && /* board */ s.d.$board.create_picture(/* tiny wurtle */ s.d.$tinywurtle, t_resumeCtx_13));
  return a_turtleadd$5;
  } else {
  (s.pc = "iPLhv1kUW5mY240k");
  null;
  }
  return a_turtleadd$4;
}
cs.registerStep(a_turtleadd$0, 'a_turtleadd$0');

function a_turtleadd$5(s) {
  var t_pauseRes_15 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_15);
  (s.$turtle = t_pauseRes_15);
  (s.pc = "i8GV55FKIxbnj8QG");
  if (s.$dec) {
  s.$dec.perform_set("Ld20rZd6ffxy3foc", s.$turtle, s);
  }
  return a_turtleadd$4;
}
cs.registerStep(a_turtleadd$5, 'a_turtleadd$5');

function a_turtleadd$4(s) {
  (s.pc = "xQKratuFp1wi4AQF");
  s.rt.logObjectMutation(/* turtles */ s.d.$turtles);
  var t_call_16 = (ok2(s, /* turtles */ s.d.$turtles, s.$spr) && /* turtles */ s.d.$turtles.add(s.$spr, s));
  t_call_16;
  return s.rt.leave();
}
cs.registerStep(a_turtleadd$4, 'a_turtleadd$4');

/* ACTION: game spawn actors */
function a_gamespawnactors(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamespawnactors$0;
  s.name = "game spawn actors";
  s.$x = undefined;
  s.$secs = undefined;
  s.$num_turtles = undefined;
  return s;
}
cs.registerAction("game spawn actors", "gamespawnactors", a_gamespawnactors, true);

function a_gamespawnactors$0(s) {
  (s.pc = "jF40bPCy7GMOOHid");
  var t_call_0 = lib.Time.now(s);
  (s.$x = t_call_0);
  var t_elseIf_1 = true;
  (s.pc = "Z0pU9gUq0h0FczfD");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_2 = /* metrics */ s.d.$metrics[("$sec1")];
  }
  var t_call_3 = (ok2(s, s.$x, t_recOp_2) && s.$x.subtract(t_recOp_2, s));
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_4 = /* metrics */ s.d.$metrics[("$spawn")];
  }
  var t_infix_5 = (ok2(s, t_call_3, t_recOp_4) && (t_call_3 > t_recOp_4));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "OFSJmW5jiVgDxnOa");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$sec1", s.$x, s);
  }
  (s.pc = "DFFATIMwCFSfBrbZ");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_add("$generations", 1, s);
  }
  (s.pc = "G0zQq434Cg1WWRXv");
  return s.rt.enter(a_gamespawnnext(s, a_gamespawnactors$7));
  } else {
  (s.pc = "e9v9K2XjAreC3nNv");
  null;
  }
  return a_gamespawnactors$4;
}
cs.registerStep(a_gamespawnactors$0, 'a_gamespawnactors$0');

function a_gamespawnactors$7(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  (s.$secs = s.rt.returnedFrom.results[0]);
  (s.$num_turtles = s.rt.returnedFrom.results[1]);
  (s.pc = "lQUW4u3qtcNy8Axu");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$spawn", s.$secs, s);
  }
  var t_elseIf_7 = true;
  (s.pc = "cdlP2tQc42WNGXqu");
  var t_call_8 = (ok1(s, /* turtles */ s.d.$turtles) && /* turtles */ s.d.$turtles.count(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 < 60));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "l5dFuLMlxFypHEly");
  return s.rt.enter(a_turtlesadd(s, a_gamespawnactors$10, s.$num_turtles));
  } else {
  (s.pc = "gwM9IygKL4eXnpIl");
  null;
  }
  return a_gamespawnactors$9;
}
cs.registerStep(a_gamespawnactors$7, 'a_gamespawnactors$7');

function a_gamespawnactors$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_gamespawnactors$4, 'a_gamespawnactors$4');

function a_gamespawnactors$10(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  return a_gamespawnactors$9;
}
cs.registerStep(a_gamespawnactors$10, 'a_gamespawnactors$10');

function a_gamespawnactors$9(s) {
  var t_elseIf_11 = true;
  (s.pc = "xMC7T6WNBGlFjoI3");
  var t_call_12 = (ok1(s, /* gates */ s.d.$gates) && /* gates */ s.d.$gates.count(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 < 15));
  ok1(s, t_infix_13);
  if (t_infix_13) {
  (s.pc = "M0N9RsdYD8scJLNU");
  return s.rt.enter(a_gateadd(s, a_gamespawnactors$12));
  } else {
  (s.pc = "Vd6XJwfwyFOENjJs");
  null;
  }
  return a_gamespawnactors$11;
}
cs.registerStep(a_gamespawnactors$9, 'a_gamespawnactors$9');

function a_gamespawnactors$12(s) {
  var t_actRes_14 = s.rt.returnedFrom.result;
  t_actRes_14;
  return a_gamespawnactors$11;
}
cs.registerStep(a_gamespawnactors$12, 'a_gamespawnactors$12');

function a_gamespawnactors$11(s) {
  var t_elseIf_15 = true;
  (s.pc = "x5yDUXWxC21w8UqH");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_16 = /* metrics */ s.d.$metrics[("$generations")];
  }
  var t_infix_17 = (ok1(s, t_recOp_16) && (t_recOp_16 > 10));
  var t_lazy_18 = t_infix_17;
  if ((ok1(s, t_lazy_18) && t_lazy_18)) {
  var t_call_19 = lib.Math_.random(100, s);
  var t_infix_20 = (ok1(s, t_call_19) && (t_call_19 < 5));
  (t_lazy_18 = t_infix_20);
  }
  ok1(s, t_lazy_18);
  if (t_lazy_18) {
  (s.pc = "MK8o97PoSeekj81h");
  return s.rt.enter(a_carrotadd(s, a_gamespawnactors$16));
  } else {
  (s.pc = "dmYgYWSUxM2KIdFe");
  null;
  }
  return a_gamespawnactors$15;
}
cs.registerStep(a_gamespawnactors$11, 'a_gamespawnactors$11');

function a_gamespawnactors$16(s) {
  var t_actRes_21 = s.rt.returnedFrom.result;
  t_actRes_21;
  return a_gamespawnactors$15;
}
cs.registerStep(a_gamespawnactors$16, 'a_gamespawnactors$16');

function a_gamespawnactors$15(s) {
  return a_gamespawnactors$4;
}
cs.registerStep(a_gamespawnactors$15, 'a_gamespawnactors$15');

/* ACTION: game spawn next */
function a_gamespawnnext(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamespawnnext$0;
  s.name = "game spawn next";
  s.results = [];
  s.results[0] = undefined;
  s.results[1] = undefined;
  return s;
}
cs.registerAction("game spawn next", "gamespawnnext", a_gamespawnnext, true);

function a_gamespawnnext$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "pQH4iMb921TiW1vO");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$generations")];
  }
  var t_infix_2 = (ok1(s, t_recOp_1) && (t_recOp_1 < 6));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (t_elseIf_0 = false);
  (s.pc = "zHOQzKq2rxkB3hY4");
  (s.results[0] = 4);
  (s.pc = "k09P1hsOtYFuQmNe");
  (s.results[1] = 3);
  }
  if (t_elseIf_0) {
  (s.pc = "q0AuPZpUI4jCNy3n");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_3 = /* metrics */ s.d.$metrics[("$generations")];
  }
  var t_infix_4 = (ok1(s, t_recOp_3) && (t_recOp_3 < 16));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (t_elseIf_0 = false);
  (s.pc = "xOtZEpHcT1zKEa7w");
  (s.results[0] = 3);
  (s.pc = "gu7zvVp29UOwS4PT");
  (s.results[1] = 4);
  }
  }
  if (t_elseIf_0) {
  (s.pc = "qWTVg8rL2Ki9k2KF");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_5 = /* metrics */ s.d.$metrics[("$generations")];
  }
  var t_infix_6 = (ok1(s, t_recOp_5) && (t_recOp_5 < 26));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "xNZp4jXvjaEtFT4u");
  (s.results[0] = 2);
  (s.pc = "r4kpeJ5YUPbxSx8E");
  (s.results[1] = 5);
  } else {
  (s.pc = "vNrzg8I3txeJuZTx");
  (s.results[0] = 1);
  (s.pc = "bBskcWnxZDoUXeZe");
  (s.results[1] = 6);
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_gamespawnnext$0, 'a_gamespawnnext$0');

/* ACTION: game boundary init */
function a_gameboundaryinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameboundaryinit$0;
  s.name = "game boundary init";
  s.$line = undefined;
  return s;
}
cs.registerAction("game boundary init", "gameboundaryinit", a_gameboundaryinit, true);

function a_gameboundaryinit$0(s) {
  (s.pc = "v4sG2uno4Irm5aTr");
  s.rt.logObjectMutation(/* board */ s.d.$board);
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_boundary(1, s));
  (s.pc = "LV5TzAGm8EUnKrbS");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_call_1 = (ok2(s, /* board */ s.d.$board, t_call_0) && /* board */ s.d.$board.create_rectangle(t_call_0, 1, s));
  s.rt.markAllocated(t_call_1);
  (s.$line = t_call_1);
  (s.pc = "xIcYb2Wy65VV4RYA");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 / 2));
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_infix_3) && s.$line.set_pos(t_infix_3, 0, s));
  (s.pc = "EVdUpg7ywQ4mMLMj");
  var t_call_4 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_call_4) && s.$line.set_color(t_call_4, s));
  (s.pc = "xQqCAiXdfruzyZW8");
  var t_call_5 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_call_6 = (ok2(s, /* board */ s.d.$board, t_call_5) && /* board */ s.d.$board.create_rectangle(t_call_5, 1, s));
  s.rt.markAllocated(t_call_6);
  (s.$line = t_call_6);
  (s.pc = "MdPNW3J5s8YquNj5");
  var t_call_7 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 / 2));
  var t_call_9 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 - 1));
  s.rt.logObjectMutation(s.$line);
  (ok3(s, s.$line, t_infix_8, t_infix_10) && s.$line.set_pos(t_infix_8, t_infix_10, s));
  (s.pc = "A2ofa9UW4m8lZFF6");
  var t_call_11 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_call_11) && s.$line.set_color(t_call_11, s));
  (s.pc = "ScElVkEPo29EVY4B");
  var t_call_12 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_call_13 = (ok2(s, /* board */ s.d.$board, t_call_12) && /* board */ s.d.$board.create_rectangle(1, t_call_12, s));
  s.rt.markAllocated(t_call_13);
  (s.$line = t_call_13);
  (s.pc = "qMAKnP98ORE0Fd23");
  var t_call_14 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 / 2));
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_infix_15) && s.$line.set_pos(0, t_infix_15, s));
  (s.pc = "BaqXV7oEX2I96H2m");
  var t_call_16 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_call_16) && s.$line.set_color(t_call_16, s));
  (s.pc = "GUZNcmm2VaM2eWhQ");
  var t_call_17 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_call_18 = (ok2(s, /* board */ s.d.$board, t_call_17) && /* board */ s.d.$board.create_rectangle(1, t_call_17, s));
  s.rt.markAllocated(t_call_18);
  (s.$line = t_call_18);
  (s.pc = "x54yf8Cn0ck428tD");
  var t_call_19 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_20 = (ok1(s, t_call_19) && (t_call_19 - 1));
  var t_call_21 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 / 2));
  s.rt.logObjectMutation(s.$line);
  (ok3(s, s.$line, t_infix_20, t_infix_22) && s.$line.set_pos(t_infix_20, t_infix_22, s));
  (s.pc = "Hj7oRZmBPH4w3RIZ");
  var t_call_23 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$line);
  (ok2(s, s.$line, t_call_23) && s.$line.set_color(t_call_23, s));
  return s.rt.leave();
}
cs.registerStep(a_gameboundaryinit$0, 'a_gameboundaryinit$0');


//Ent_BbWV0cmljcwaa
function Ent_BbWV0cmljcwaa(p) {
  this.parent = p;
}
Ent_BbWV0cmljcwaa.prototype = new lib.ObjectEntry();
Ent_BbWV0cmljcwaa.prototype.keys = [];
Ent_BbWV0cmljcwaa.prototype.values = ["$game on", "$score", "$health", "$multiplier", "$generations", "$update", "$spawn", "$sec1", "$FPS"];
Ent_BbWV0cmljcwaa.prototype.fields = ["$game on", "$score", "$health", "$multiplier", "$generations", "$update", "$spawn", "$sec1", "$FPS"];
Ent_BbWV0cmljcwaa.prototype["$game on_realname"] = "game on";
Ent_BbWV0cmljcwaa.prototype["$score_realname"] = "score";
Ent_BbWV0cmljcwaa.prototype["$health_realname"] = "health";
Ent_BbWV0cmljcwaa.prototype["$multiplier_realname"] = "multiplier";
Ent_BbWV0cmljcwaa.prototype["$generations_realname"] = "generations";
Ent_BbWV0cmljcwaa.prototype["$update_realname"] = "update";
Ent_BbWV0cmljcwaa.prototype["$spawn_realname"] = "spawn";
Ent_BbWV0cmljcwaa.prototype["$sec1_realname"] = "sec1";
Ent_BbWV0cmljcwaa.prototype["$FPS_realname"] = "FPS";
Ent_BbWV0cmljcwaa.prototype["$game on"] = false;
Ent_BbWV0cmljcwaa.prototype["$score"] = 0;
Ent_BbWV0cmljcwaa.prototype["$health"] = 0;
Ent_BbWV0cmljcwaa.prototype["$multiplier"] = 0;
Ent_BbWV0cmljcwaa.prototype["$generations"] = 0;
Ent_BbWV0cmljcwaa.prototype["$update"] = 0;
Ent_BbWV0cmljcwaa.prototype["$spawn"] = 0;
Ent_BbWV0cmljcwaa.prototype["$sec1"] = lib.DateTime.defaultValue;
Ent_BbWV0cmljcwaa.prototype["$FPS"] = 0;
//Tbl_BbWV0cmljcwaa
function Tbl_BbWV0cmljcwaa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BbWV0cmljcwaa.prototype = new lib.ObjectSingleton();
Tbl_BbWV0cmljcwaa.prototype.entryCtor = Ent_BbWV0cmljcwaa;
cs.objectSingletons["metrics type"] = function(d) { return d.$BbWV0cmljcwaa };
Tbl_BbWV0cmljcwaa.prototype.selfCtor = Tbl_BbWV0cmljcwaa;
Tbl_BbWV0cmljcwaa.prototype.stableName = "BbWV0cmljcwaa";
Tbl_BbWV0cmljcwaa.prototype.entryKindName = "metrics type";

// jsonimport
Ent_BbWV0cmljcwaa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$game on", ctx.importBoolean(json, "game on"), s);
  this.perform_set("$score", ctx.importNumber(json, "score"), s);
  this.perform_set("$health", ctx.importNumber(json, "health"), s);
  this.perform_set("$multiplier", ctx.importNumber(json, "multiplier"), s);
  this.perform_set("$generations", ctx.importNumber(json, "generations"), s);
  this.perform_set("$update", ctx.importNumber(json, "update"), s);
  this.perform_set("$spawn", ctx.importNumber(json, "spawn"), s);
  this.perform_set("$sec1", ctx.importDateTime(json, "sec1"), s);
  this.perform_set("$FPS", ctx.importNumber(json, "FPS"), s);
}
cs.registerGlobal("$BbWV0cmljcwaa");
/* ACTION: game metrics init */
function a_gamemetricsinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamemetricsinit$0;
  s.name = "game metrics init";
  return s;
}
cs.registerAction("game metrics init", "gamemetricsinit", a_gamemetricsinit, true);

function a_gamemetricsinit$0(s) {
  (s.pc = "ZePjJLxQK5GtGCJo");
  var t_call_0 = (ok1(s, /* metrics type */ s.d.$BbWV0cmljcwaa) && /* metrics type */ s.d.$BbWV0cmljcwaa.create(s));
  s.rt.markAllocated(t_call_0);
  (/* metrics */ s.d.$metrics = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "xIrlwj7Y0Hk22B2h");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$game on", true, s);
  }
  (s.pc = "uZmTfmU4i1wB6e29");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$update", 0, s);
  }
  (s.pc = "kjnbROevG7bZQjGs");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$spawn", 0, s);
  }
  (s.pc = "v1I6s7xrifXlpL9G");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$generations", 0, s);
  }
  (s.pc = "xLXBV64V0xPa7zfZ");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$health", 1, s);
  }
  (s.pc = "l9wREVZQZPu13276");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$multiplier", 1, s);
  }
  (s.pc = "Zku4AxKRCQFHPbo0");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$score", 0, s);
  }
  (s.pc = "x552gxPTGia8YXB1");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$FPS", 0, s);
  }
  (s.pc = "AcYTS7yDtZenBe2V");
  var t_call_1 = lib.Time.now(s);
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$sec1", t_call_1, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_gamemetricsinit$0, 'a_gamemetricsinit$0');

/* ACTION: banner health update */
function a_bannerhealthupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerhealthupdate$0;
  s.name = "banner health update";
  s.$x = undefined;
  return s;
}
cs.registerAction("banner health update", "bannerhealthupdate", a_bannerhealthupdate, true);

function a_bannerhealthupdate$0(s) {
  (s.pc = "sl62MIv5xSJvR7Qq");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_0 = /* metrics */ s.d.$metrics[("$health")];
  }
  (s.$x = t_recOp_0);
  s.t_elseIf_1 = true;
  (s.pc = "RhC7NK02zS42s5F4");
  var t_infix_2 = (ok1(s, s.$x) && (s.$x <= 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.t_elseIf_1 = false);
  (s.pc = "N0uB94UrnHFWiuKR");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$game on", false, s);
  }
  (s.pc = "x47aiQHncIpdyHWZ");
  return s.rt.enter(a_gameend(s, a_bannerhealthupdate$5));
  }
  return a_bannerhealthupdate$3;
}
cs.registerStep(a_bannerhealthupdate$0, 'a_bannerhealthupdate$0');

function a_bannerhealthupdate$5(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return a_bannerhealthupdate$3;
}
cs.registerStep(a_bannerhealthupdate$5, 'a_bannerhealthupdate$5');

function a_bannerhealthupdate$3(s) {
  if (s.t_elseIf_1) {
  (s.pc = "xM5z8RIFPsLpoRXh");
  var t_infix_4 = (ok1(s, s.$x) && (s.$x > 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "l9FEA0x6uILVPUXl");
  (s.$x = 1);
  (s.pc = "xfbqd4Rxw9FYurQ0");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$health", 1, s);
  }
  } else {
  (s.pc = "nOtFwLKZ8QIakrNn");
  null;
  }
  }
  (s.pc = "xQJs7tboE2tOuK6c");
  if (/* banner */ s.d.$banner) {
  var t_recOp_5 = /* banner */ s.d.$banner[("$health")];
  }
  var t_infix_6 = (ok1(s, s.$x) && (100 * s.$x));
  s.rt.logObjectMutation(t_recOp_5);
  (ok2(s, t_recOp_5, t_infix_6) && t_recOp_5.set_width(t_infix_6, s));
  var t_elseIf_7 = true;
  (s.pc = "pfVndO0xhuz2T2Yl");
  var t_infix_8 = (ok1(s, s.$x) && (s.$x < 0.33));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (t_elseIf_7 = false);
  (s.pc = "oVh7siuJu1Te42ro");
  if (/* banner */ s.d.$banner) {
  var t_recOp_9 = /* banner */ s.d.$banner[("$health")];
  }
  var t_call_10 = lib.Colors.red(s);
  s.rt.logObjectMutation(t_recOp_9);
  (ok2(s, t_recOp_9, t_call_10) && t_recOp_9.set_color(t_call_10, s));
  }
  if (t_elseIf_7) {
  (s.pc = "VTnkGuXFJwMBEgs2");
  var t_infix_11 = (ok1(s, s.$x) && (s.$x < 0.66));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.pc = "BNdUsrfCURF4cQ6w");
  if (/* banner */ s.d.$banner) {
  var t_recOp_12 = /* banner */ s.d.$banner[("$health")];
  }
  var t_call_13 = lib.Colors.yellow(s);
  s.rt.logObjectMutation(t_recOp_12);
  (ok2(s, t_recOp_12, t_call_13) && t_recOp_12.set_color(t_call_13, s));
  } else {
  (s.pc = "ApalvUsAl4DzsNyi");
  if (/* banner */ s.d.$banner) {
  var t_recOp_14 = /* banner */ s.d.$banner[("$health")];
  }
  var t_call_15 = lib.Colors.cyan(s);
  s.rt.logObjectMutation(t_recOp_14);
  (ok2(s, t_recOp_14, t_call_15) && t_recOp_14.set_color(t_call_15, s));
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_bannerhealthupdate$3, 'a_bannerhealthupdate$3');

/* ACTION: rabbit health decrease */
function a_rabbithealthdecrease(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rabbithealthdecrease$0;
  s.name = "rabbit health decrease";
  s.$h = undefined;
  return s;
}
cs.registerAction("rabbit health decrease", "rabbithealthdecrease", a_rabbithealthdecrease, true);

function a_rabbithealthdecrease$0(s) {
  (s.pc = "jUo2cAQORSNgkFHy");
  return s.rt.enter(a_soundplay(s, a_rabbithealthdecrease$2, /* health down */ s.d.$healthdown));
}
cs.registerStep(a_rabbithealthdecrease$0, 'a_rabbithealthdecrease$0');

function a_rabbithealthdecrease$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "lRoz2EdMSKcpLlCP");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$health")];
  }
  (s.$h = t_recOp_1);
  (s.pc = "kmWH55MF2kgqnbz7");
  var t_infix_2 = (ok1(s, s.$h) && (s.$h - 0.25));
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$health", t_infix_2, s);
  }
  (s.pc = "xw86zthCKwwiF4KG");
  return s.rt.enter(a_bannerhealthupdate(s, a_rabbithealthdecrease$5));
}
cs.registerStep(a_rabbithealthdecrease$2, 'a_rabbithealthdecrease$2');

function a_rabbithealthdecrease$5(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return s.rt.leave();
}
cs.registerStep(a_rabbithealthdecrease$5, 'a_rabbithealthdecrease$5');

/* ACTION: banner score increase */
function a_bannerscoreincrease(previous, returnAddr, $p) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerscoreincrease$0;
  s.name = "banner score increase";
  s.$p = $p;
  s.$x = undefined;
  return s;
}
cs.registerAction("banner score increase", "bannerscoreincrease", a_bannerscoreincrease, true);

function a_bannerscoreincrease$0(s) {
  (s.pc = "xFR8OXuKEXB18ZGo");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_0 = /* metrics */ s.d.$metrics[("$score")];
  }
  (s.$x = t_recOp_0);
  (s.pc = "KlQlmCYHtvKILVYG");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$multiplier")];
  }
  var t_infix_2 = (ok2(s, s.$p, t_recOp_1) && (s.$p * t_recOp_1));
  var t_infix_3 = (ok2(s, s.$x, t_infix_2) && (s.$x + t_infix_2));
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$score", t_infix_3, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_bannerscoreincrease$0, 'a_bannerscoreincrease$0');

/* ACTION: banner score update */
function a_bannerscoreupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerscoreupdate$0;
  s.name = "banner score update";
  return s;
}
cs.registerAction("banner score update", "bannerscoreupdate", a_bannerscoreupdate, true);

function a_bannerscoreupdate$0(s) {
  (s.pc = "WE2X4x6mZgCchpi4");
  if (/* banner */ s.d.$banner) {
  var t_recOp_0 = /* banner */ s.d.$banner[("$score")];
  }
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$score")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.Number_.to_string(t_recOp_1, s));
  s.rt.logObjectMutation(t_recOp_0);
  (ok2(s, t_recOp_0, t_call_2) && t_recOp_0.set_text(t_call_2, s));
  return s.rt.leave();
}
cs.registerStep(a_bannerscoreupdate$0, 'a_bannerscoreupdate$0');

/* ACTION: banner multiplier increase */
function a_bannermultiplierincr(previous, returnAddr, $p) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannermultiplierincr$0;
  s.name = "banner multiplier increase";
  s.$p = $p;
  s.$x = undefined;
  return s;
}
cs.registerAction("banner multiplier increase", "bannermultiplierincr", a_bannermultiplierincr, true);

function a_bannermultiplierincr$0(s) {
  (s.pc = "sE0JL0DSGYBFoOLO");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_0 = /* metrics */ s.d.$metrics[("$multiplier")];
  }
  (s.$x = t_recOp_0);
  (s.pc = "XMv06e4iUJuFEPSv");
  var t_infix_1 = (ok2(s, s.$x, s.$p) && (s.$x + s.$p));
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$multiplier", t_infix_1, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_bannermultiplierincr$0, 'a_bannermultiplierincr$0');

/* ACTION: banner multiplier update */
function a_bannermultiplierupda(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannermultiplierupda$0;
  s.name = "banner multiplier update";
  return s;
}
cs.registerAction("banner multiplier update", "bannermultiplierupda", a_bannermultiplierupda, true);

function a_bannermultiplierupda$0(s) {
  (s.pc = "fBt6Z0NhtHX8nsTk");
  if (/* banner */ s.d.$banner) {
  var t_recOp_0 = /* banner */ s.d.$banner[("$multiplier")];
  }
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$multiplier")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.Number_.to_string(t_recOp_1, s));
  var t_call_3 = (ok1(s, t_call_2) && lib.String_.concat("x", t_call_2, s));
  s.rt.logObjectMutation(t_recOp_0);
  (ok2(s, t_recOp_0, t_call_3) && t_recOp_0.set_text(t_call_3, s));
  return s.rt.leave();
}
cs.registerStep(a_bannermultiplierupda$0, 'a_bannermultiplierupda$0');

/* ACTION: game end */
function a_gameend(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameend$0;
  s.name = "game end";
  s.$game_over = undefined;
  s.$newhigh = undefined;
  return s;
}
cs.registerAction("game end", "gameend", a_gameend, true);

function ok5(s, a0, a1, a2, a3, a4) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function ok6(s, a0, a1, a2, a3, a4, a5) {
  return (a0 == undefined || a1 == undefined || a2 == undefined || a3 == undefined || a4 == undefined || a5 == undefined) ?
       TDev.Util.userError("using invalid value") : true;
}

function a_gameend$0(s) {
  (s.pc = "pRX6XX1zeQ4gnZah");
  null;
  (s.pc = "JaBMKwFPT2n2XzUa");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 40, "Game Over", s));
  s.rt.markAllocated(t_call_0);
  (s.$game_over = t_call_0);
  (s.pc = "xRkmZy0bCas2h4eO");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 / 3));
  var t_call_3 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 / 3));
  s.rt.logObjectMutation(s.$game_over);
  (ok3(s, s.$game_over, t_infix_2, t_infix_4) && s.$game_over.set_pos(t_infix_2, t_infix_4, s));
  (s.pc = "b406XR2a3WtrzzZ0");
  var t_call_5 = lib.Colors.orange(s);
  s.rt.logObjectMutation(s.$game_over);
  (ok2(s, s.$game_over, t_call_5) && s.$game_over.set_color(t_call_5, s));
  var t_elseIf_6 = true;
  (s.pc = "wyM2MF6PnR3XWTIr");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_7 = /* metrics */ s.d.$metrics[("$score")];
  }
  if (/* options */ s.d.$options) {
  var t_recOp_8 = /* options */ s.d.$options[("$high score")];
  }
  var t_infix_9 = (ok2(s, t_recOp_7, t_recOp_8) && (t_recOp_7 > t_recOp_8));
  ok1(s, t_infix_9);
  if (t_infix_9) {
  (s.pc = "ijvm70v01OMwJOC6");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_10 = /* metrics */ s.d.$metrics[("$score")];
  }
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$high score", t_recOp_10, s);
  }
  (s.pc = "xEaX6uQSZ1p4Azjx");
  var t_call_11 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 40, "New High Score!", s));
  s.rt.markAllocated(t_call_11);
  (s.$newhigh = t_call_11);
  (s.pc = "Puelz4hvoO3uEQX0");
  var t_call_12 = lib.Colors.magenta(s);
  s.rt.logObjectMutation(s.$newhigh);
  (ok2(s, s.$newhigh, t_call_12) && s.$newhigh.set_color(t_call_12, s));
  (s.pc = "lOpwf7G4WEyW0JfD");
  var t_call_13 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 / 2));
  var t_call_15 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 / 2));
  s.rt.logObjectMutation(s.$newhigh);
  (ok3(s, s.$newhigh, t_infix_14, t_infix_16) && s.$newhigh.set_pos(t_infix_14, t_infix_16, s));
  } else {
  (s.pc = "jufalU4Ym2jrOAh8");
  null;
  }
  (s.pc = "YLtvi6zZhLoyntAF");
  s.rt.logObjectMutation(/* board */ s.d.$board);
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.update_on_wall(s));
  (s.pc = "NRkDJC5iet3JiXd2");
  return s.rt.enter(a_soundplay(s, a_gameend$7, /* gong */ s.d.$gong));
}
cs.registerStep(a_gameend$0, 'a_gameend$0');

function a_gameend$7(s) {
  var t_actRes_17 = s.rt.returnedFrom.result;
  t_actRes_17;
  (s.pc = "dYzyFfALCIzFuuST");
  var t_resumeCtx_18 = s.rt.getAwaitResumeCtx(a_gameend$8);
  lib.Time.sleep(3, t_resumeCtx_18);
  return a_gameend$8;
}
cs.registerStep(a_gameend$7, 'a_gameend$7');

function a_gameend$8(s) {
  (s.pc = "xThlW2E6qqPFPha7");
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.clear_events(s));
  (s.pc = "Tobao1STC8ELlzWQ");
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.post_to_wall(s));
  (s.pc = "w2kLm74EjqoPeKes");
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.clear_events(s));
  return s.rt.leave();
}
cs.registerStep(a_gameend$8, 'a_gameend$8');

cs.registerArtResource("Picture", "$carrot", ".\u002fart\u002fl0_carrot");
/* ACTION: carrot add */
function a_carrotadd(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_carrotadd$0;
  s.name = "carrot add";
  return s;
}
cs.registerAction("carrot add", "carrotadd", a_carrotadd, true);

function a_carrotadd$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "YM31og24bUhjWLim");
  var t_call_1 = (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.is_visible(s));
  var t_call_2 = (ok1(s, t_call_1) && lib.Boolean_.not(t_call_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "o34yVrLg4MjSrYoW");
  return s.rt.enter(a_soundplay(s, a_carrotadd$3, /* carrot enter */ s.d.$carrotenter));
  } else {
  (s.pc = "xPCBRTCcHPnNOQd4");
  null;
  }
  return a_carrotadd$2;
}
cs.registerStep(a_carrotadd$0, 'a_carrotadd$0');

function a_carrotadd$3(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "FuDVEgxkmuEJ4vHZ");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.show(s));
  (s.pc = "xNyeouMf8mm9MibP");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.set_opacity(1, s));
  (s.pc = "fhX5KsqcrfGQzKOr");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.set_angular_speed(90, s));
  (s.pc = "eJDBGx2VfBevlPyz");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_call_5 = (ok1(s, t_call_4) && lib.Math_.random(t_call_4, s));
  var t_call_6 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_call_7 = (ok1(s, t_call_6) && lib.Math_.random(t_call_6, s));
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok3(s, /* power up */ s.d.$powerup, t_call_5, t_call_7) && /* power up */ s.d.$powerup.set_pos(t_call_5, t_call_7, s));
  (s.pc = "yBuYHLpR15mArxOl");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.set_speed(150, 150, s));
  return a_carrotadd$2;
}
cs.registerStep(a_carrotadd$3, 'a_carrotadd$3');

function a_carrotadd$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_carrotadd$2, 'a_carrotadd$2');

/* ACTION: carrot update */
function a_carrotupdate(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_carrotupdate$0;
  s.name = "carrot update";
  return s;
}
cs.registerAction("carrot update", "carrotupdate", a_carrotupdate, true);

function a_carrotupdate$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "wV4N1W4PvAGvYwia");
  var t_call_1 = (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  var t_elseIf_2 = true;
  (s.pc = "f1NXxJFrpaW2e494");
  var t_call_3 = (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.opacity(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 === 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (t_elseIf_2 = false);
  var t_elseIf_5 = true;
  (s.pc = "CC2CjkwwgJk1zka2");
  var t_call_6 = (ok2(s, /* power up */ s.d.$powerup, /* rabbit */ s.d.$rabbit) && /* power up */ s.d.$powerup.overlaps_with(/* rabbit */ s.d.$rabbit, s));
  ok1(s, t_call_6);
  if (t_call_6) {
  (t_elseIf_5 = false);
  (s.pc = "Qgpu1iCGbjP5Uq1M");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.set_opacity(0.5, s));
  (s.pc = "wDowkU4SnbZW1IX4");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.set_speed(0, 0, s));
  }
  if (t_elseIf_5) {
  (s.pc = "xYmy5snpm1TLddVU");
  var t_call_7 = (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.angular_speed(s));
  var t_infix_8 = (ok1(s, t_call_7) && (t_call_7 < 1000));
  ok1(s, t_infix_8);
  if (t_infix_8) {
  (s.pc = "iI9ZtPyIxf6MikHI");
  var t_call_9 = (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.angular_speed(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 + 10));
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok2(s, /* power up */ s.d.$powerup, t_infix_10) && /* power up */ s.d.$powerup.set_angular_speed(t_infix_10, s));
  } else {
  (s.pc = "Z0aJhm0LCPh14Zpm");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.hide(s));
  }
  }
  }
  if (t_elseIf_2) {
  (s.pc = "UKp2op2CW8sLtBh2");
  if (/* banner */ s.d.$banner) {
  var t_recOp_11 = /* banner */ s.d.$banner[("$health")];
  }
  var t_call_12 = (ok2(s, /* power up */ s.d.$powerup, t_recOp_11) && /* power up */ s.d.$powerup.overlaps_with(t_recOp_11, s));
  var t_call_13 = (ok1(s, t_call_12) && lib.Boolean_.not(t_call_12, s));
  ok1(s, t_call_13);
  if (t_call_13) {
  (s.pc = "IfEssfcpnSaWfn88");
  if (/* banner */ s.d.$banner) {
  var t_recOp_14 = /* banner */ s.d.$banner[("$health")];
  }
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok2(s, /* power up */ s.d.$powerup, t_recOp_14) && /* power up */ s.d.$powerup.move_towards(t_recOp_14, 0.25, s));
  } else {
  (s.pc = "ifRwT29eJ7VkwKCN");
  s.rt.logObjectMutation(/* power up */ s.d.$powerup);
  (ok1(s, /* power up */ s.d.$powerup) && /* power up */ s.d.$powerup.hide(s));
  (s.pc = "uhYPktWuasL1GpVA");
  return s.rt.enter(a_rabbithealthincrease(s, a_carrotupdate$10));
  }
  return a_carrotupdate$8;
  }
  return a_carrotupdate$11;
  } else {
  (s.pc = "uxVuNTGGUUzePv4U");
  null;
  }
  return a_carrotupdate$2;
}
cs.registerStep(a_carrotupdate$0, 'a_carrotupdate$0');

function a_carrotupdate$10(s) {
  var t_actRes_15 = s.rt.returnedFrom.result;
  t_actRes_15;
  return a_carrotupdate$8;
}
cs.registerStep(a_carrotupdate$10, 'a_carrotupdate$10');

function a_carrotupdate$8(s) {
  return a_carrotupdate$11;
}
cs.registerStep(a_carrotupdate$8, 'a_carrotupdate$8');

function a_carrotupdate$11(s) {
  return a_carrotupdate$2;
}
cs.registerStep(a_carrotupdate$11, 'a_carrotupdate$11');

function a_carrotupdate$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_carrotupdate$2, 'a_carrotupdate$2');

/* ACTION: rabbit health increase */
function a_rabbithealthincrease(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rabbithealthincrease$0;
  s.name = "rabbit health increase";
  s.$h = undefined;
  return s;
}
cs.registerAction("rabbit health increase", "rabbithealthincrease", a_rabbithealthincrease, true);

function a_rabbithealthincrease$0(s) {
  (s.pc = "hFfmM4umdoib28DT");
  return s.rt.enter(a_soundplay(s, a_rabbithealthincrease$2, /* got carrot */ s.d.$gotcarrot));
}
cs.registerStep(a_rabbithealthincrease$0, 'a_rabbithealthincrease$0');

function a_rabbithealthincrease$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "x4z2t8Z2YgpPVRWT");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$health")];
  }
  (s.$h = t_recOp_1);
  var t_elseIf_2 = true;
  (s.pc = "TgV4RZLBW1VUsZyL");
  var t_infix_3 = (ok1(s, s.$h) && (s.$h + 0.25));
  var t_infix_4 = (ok1(s, t_infix_3) && (t_infix_3 < 1));
  ok1(s, t_infix_4);
  if (t_infix_4) {
  (s.pc = "HS3oQs6QJo4Qp2Nq");
  var t_infix_5 = (ok1(s, s.$h) && (s.$h + 0.25));
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$health", t_infix_5, s);
  }
  } else {
  (s.pc = "YR6ElCWp3N924grK");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$health", 1, s);
  }
  }
  (s.pc = "cfC2vX87kaZ4o0Kn");
  null;
  return s.rt.leave();
}
cs.registerStep(a_rabbithealthincrease$2, 'a_rabbithealthincrease$2');

/* ACTION: splash screen */
function a_splashscreen(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_splashscreen$0;
  s.name = "splash screen";
  s.result = undefined;
  s.$ww = undefined;
  s.$bunny = undefined;
  s.$x = undefined;
  s.$t1 = undefined;
  s.$title1 = undefined;
  return s;
}
cs.registerAction("splash screen", "splashscreen", a_splashscreen, true);

function a_splashscreen$0(s) {
  (s.pc = "D4kOoXPrt3X4ZVX4");
  var t_call_0 = lib.Media.create_landscape_board(800, 480, s);
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "MscyVktj6rhju7Lg");
  var t_resumeCtx_1 = s.rt.getBlockingResumeCtx(a_splashscreen$2);
  var t_call_2 = (ok2(s, s.result, /* title */ s.d.$title) && s.result.create_picture(/* title */ s.d.$title, t_resumeCtx_1));
  return a_splashscreen$2;
}
cs.registerStep(a_splashscreen$0, 'a_splashscreen$0');

function a_splashscreen$2(s) {
  var t_pauseRes_3 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_3);
  (s.$ww = t_pauseRes_3);
  (s.pc = "ps8CmTn0nqeoxf4h");
  var t_call_4 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 * 0.66));
  var t_call_6 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 / 4));
  var t_infix_8 = (ok1(s, t_infix_7) && (t_infix_7 + 50));
  s.rt.logObjectMutation(s.$ww);
  (ok3(s, s.$ww, t_infix_5, t_infix_8) && s.$ww.set_pos(t_infix_5, t_infix_8, s));
  (s.pc = "Q19BLTtW3krRmM4P");
  s.rt.logObjectMutation(s.$ww);
  (ok1(s, s.$ww) && s.$ww.set_width(500, s));
  (s.pc = "WqIFceXIR4YeMb4n");
  var t_resumeCtx_9 = s.rt.getBlockingResumeCtx(a_splashscreen$3);
  var t_call_10 = (ok2(s, s.result, /* wabbit */ s.d.$wabbit) && s.result.create_picture(/* wabbit */ s.d.$wabbit, t_resumeCtx_9));
  return a_splashscreen$3;
}
cs.registerStep(a_splashscreen$2, 'a_splashscreen$2');

function a_splashscreen$3(s) {
  var t_pauseRes_11 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_11);
  (s.$bunny = t_pauseRes_11);
  (s.pc = "bCpXnfQeBs4zLCRE");
  var t_call_12 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 / 4));
  (s.$x = t_infix_13);
  (s.pc = "LmuoI6iZ4U4JktFO");
  var t_call_14 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_15 = (ok1(s, t_call_14) && (t_call_14 / 2));
  s.rt.logObjectMutation(s.$bunny);
  (ok3(s, s.$bunny, s.$x, t_infix_15) && s.$bunny.set_pos(s.$x, t_infix_15, s));
  (s.pc = "xu7sesABAtf41i2Y");
  var t_call_16 = lib.Colors.white(s);
  s.rt.logObjectMutation(s.$bunny);
  (ok2(s, s.$bunny, t_call_16) && s.$bunny.set_color(t_call_16, s));
  (s.pc = "vm1vJ2irjQOIITHa");
  var t_resumeCtx_17 = s.rt.getBlockingResumeCtx(a_splashscreen$4);
  var t_call_18 = (ok2(s, s.result, /* wurtle */ s.d.$wurtle) && s.result.create_picture(/* wurtle */ s.d.$wurtle, t_resumeCtx_17));
  return a_splashscreen$4;
}
cs.registerStep(a_splashscreen$3, 'a_splashscreen$3');

function a_splashscreen$4(s) {
  var t_pauseRes_19 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_19);
  (s.$t1 = t_pauseRes_19);
  (s.pc = "tiJq4qbt6W4NCNpo");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_angle(135, s));
  (s.pc = "xIcM0USp9uADqqH3");
  var t_call_20 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_21 = (ok1(s, t_call_20) && (t_call_20 / 5));
  var t_call_22 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_23 = (ok1(s, t_call_22) && (t_call_22 / 5));
  s.rt.logObjectMutation(s.$t1);
  (ok3(s, s.$t1, t_infix_21, t_infix_23) && s.$t1.set_pos(t_infix_21, t_infix_23, s));
  (s.pc = "vEfSXAVOIQnj2uFS");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_width(200, s));
  (s.pc = "Za0uCALxbaeZztiZ");
  var t_resumeCtx_24 = s.rt.getBlockingResumeCtx(a_splashscreen$5);
  var t_call_25 = (ok2(s, s.result, /* wurtle */ s.d.$wurtle) && s.result.create_picture(/* wurtle */ s.d.$wurtle, t_resumeCtx_24));
  return a_splashscreen$5;
}
cs.registerStep(a_splashscreen$4, 'a_splashscreen$4');

function a_splashscreen$5(s) {
  var t_pauseRes_26 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_26);
  (s.$t1 = t_pauseRes_26);
  (s.pc = "yawdOkoqOEC9sspF");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_angle(90, s));
  (s.pc = "et8XQaxDzL3vMEoo");
  var t_call_27 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_28 = (ok1(s, t_call_27) && (t_call_27 / 10));
  var t_call_29 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_30 = (ok1(s, t_call_29) && (t_call_29 / 2));
  s.rt.logObjectMutation(s.$t1);
  (ok3(s, s.$t1, t_infix_28, t_infix_30) && s.$t1.set_pos(t_infix_28, t_infix_30, s));
  (s.pc = "CNhiYJue3autJJuP");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_width(200, s));
  (s.pc = "FkHqoqhkwcexQkKl");
  var t_resumeCtx_31 = s.rt.getBlockingResumeCtx(a_splashscreen$6);
  var t_call_32 = (ok2(s, s.result, /* wurtle */ s.d.$wurtle) && s.result.create_picture(/* wurtle */ s.d.$wurtle, t_resumeCtx_31));
  return a_splashscreen$6;
}
cs.registerStep(a_splashscreen$5, 'a_splashscreen$5');

function a_splashscreen$6(s) {
  var t_pauseRes_33 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_33);
  (s.$t1 = t_pauseRes_33);
  (s.pc = "dV3KmqHsmZbxJuHY");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_angle(270, s));
  (s.pc = "zBPNMFdrbdlHfZhl");
  var t_call_34 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_35 = (ok1(s, t_call_34) && (t_call_34 / 3));
  var t_call_36 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_37 = (ok1(s, t_call_36) && (t_call_36 / 2));
  s.rt.logObjectMutation(s.$t1);
  (ok3(s, s.$t1, t_infix_35, t_infix_37) && s.$t1.set_pos(t_infix_35, t_infix_37, s));
  (s.pc = "xNMH2FYzpxbpw0Ss");
  s.rt.logObjectMutation(s.$t1);
  (ok1(s, s.$t1) && s.$t1.set_width(200, s));
  (s.pc = "LyzSQNII4fQoZRaQ");
  var t_resumeCtx_38 = s.rt.getBlockingResumeCtx(a_splashscreen$7);
  var t_call_39 = (ok2(s, s.result, /* carrot */ s.d.$carrot) && s.result.create_picture(/* carrot */ s.d.$carrot, t_resumeCtx_38));
  return a_splashscreen$7;
}
cs.registerStep(a_splashscreen$6, 'a_splashscreen$6');

function a_splashscreen$7(s) {
  var t_pauseRes_40 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_40);
  (/* splash carrot */ s.d.$splashcarrot = t_pauseRes_40);
  s.rt.logDataWrite();
  (s.pc = "xWajKanuvA6kf44C");
  var t_call_41 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_42 = (ok1(s, t_call_41) && (t_call_41 - 160));
  var t_call_43 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_44 = (ok1(s, t_call_43) && (t_call_43 - 150));
  s.rt.logObjectMutation(/* splash carrot */ s.d.$splashcarrot);
  (ok3(s, /* splash carrot */ s.d.$splashcarrot, t_infix_42, t_infix_44) && /* splash carrot */ s.d.$splashcarrot.set_pos(t_infix_42, t_infix_44, s));
  (s.pc = "uxFOkhu4YTIi39yG");
  s.rt.logObjectMutation(/* splash carrot */ s.d.$splashcarrot);
  (ok1(s, /* splash carrot */ s.d.$splashcarrot) && /* splash carrot */ s.d.$splashcarrot.set_width(300, s));
  (s.pc = "gZq4V0XHy1xey2gC");
  s.rt.logObjectMutation(/* splash carrot */ s.d.$splashcarrot);
  (ok1(s, /* splash carrot */ s.d.$splashcarrot) && /* splash carrot */ s.d.$splashcarrot.set_angular_speed(5, s));
  (s.pc = "vHr2Us4LwalmulQT");
  var t_call_45 = (ok1(s, s.result) && s.result.create_text(100, 20, 20, "Tap carrot to play", s));
  s.rt.markAllocated(t_call_45);
  (s.$title1 = t_call_45);
  (s.pc = "xpiTcsH2szCKlOEi");
  var t_call_46 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_47 = (ok1(s, t_call_46) && (t_call_46 / 2));
  var t_call_48 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_49 = (ok1(s, t_call_48) && (t_call_48 / 4));
  var t_infix_50 = (ok1(s, t_infix_49) && (t_infix_49 + 230));
  s.rt.logObjectMutation(s.$title1);
  (ok3(s, s.$title1, t_infix_47, t_infix_50) && s.$title1.set_pos(t_infix_47, t_infix_50, s));
  (s.pc = "jJyB2f2tbOEfY4Nc");
  var t_call_51 = (ok1(s, s.result) && s.result.create_text(100, 20, 20, "Artwork on", s));
  s.rt.markAllocated(t_call_51);
  (/* splash art */ s.d.$splashart = t_call_51);
  s.rt.logDataWrite();
  (s.pc = "xbKuDW34LmKWJ3zY");
  var t_call_52 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_53 = (ok1(s, t_call_52) && (t_call_52 - 30));
  s.rt.logObjectMutation(/* splash art */ s.d.$splashart);
  (ok2(s, /* splash art */ s.d.$splashart, t_infix_53) && /* splash art */ s.d.$splashart.set_pos(100, t_infix_53, s));
  (s.pc = "pn0s64doCj1Dimnt");
  var t_call_54 = (ok1(s, s.result) && s.result.create_text(100, 20, 20, "Sounds on", s));
  s.rt.markAllocated(t_call_54);
  (/* splash sound */ s.d.$splashsound = t_call_54);
  s.rt.logDataWrite();
  (s.pc = "AKh6TbmmvFU2uZOQ");
  var t_call_55 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_56 = (ok1(s, t_call_55) && (t_call_55 - 30));
  s.rt.logObjectMutation(/* splash sound */ s.d.$splashsound);
  (ok2(s, /* splash sound */ s.d.$splashsound, t_infix_56) && /* splash sound */ s.d.$splashsound.set_pos(300, t_infix_56, s));
  (s.pc = "xJyeJ25b5H3fMRJN");
  return s.rt.enter(a_splashoptionsshow(s, a_splashscreen$8));
}
cs.registerStep(a_splashscreen$7, 'a_splashscreen$7');

function a_splashscreen$8(s) {
  var t_actRes_57 = s.rt.returnedFrom.result;
  t_actRes_57;
  (s.pc = "akBSW2QTOzxfAua4");
  var t_call_58 = (ok1(s, s.result) && s.result.create_text(100, 20, 20, "Show Instructions", s));
  s.rt.markAllocated(t_call_58);
  (/* splash instructions */ s.d.$splashinstructions = t_call_58);
  s.rt.logDataWrite();
  (s.pc = "anxxeluDBL3xHvfI");
  var t_call_59 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_60 = (ok1(s, t_call_59) && (t_call_59 - 30));
  s.rt.logObjectMutation(/* splash instructions */ s.d.$splashinstructions);
  (ok2(s, /* splash instructions */ s.d.$splashinstructions, t_infix_60) && /* splash instructions */ s.d.$splashinstructions.set_pos(500, t_infix_60, s));
  (s.pc = "fP71ajlCRhgHbDqc");
  var t_resumeCtx_61 = s.rt.getBlockingResumeCtx(a_splashscreen$9);
  var t_call_62 = (ok2(s, s.result, /* instructions */ s.d.$instructions) && s.result.create_picture(/* instructions */ s.d.$instructions, t_resumeCtx_61));
  return a_splashscreen$9;
}
cs.registerStep(a_splashscreen$8, 'a_splashscreen$8');

function a_splashscreen$9(s) {
  var t_pauseRes_63 = s.pauseValue;
  s.rt.markAllocated(t_pauseRes_63);
  (/* splash inst pic */ s.d.$splashinstpic = t_pauseRes_63);
  s.rt.logDataWrite();
  (s.pc = "KfnMLMkWoTl88UjJ");
  var t_call_64 = (ok1(s, s.result) && s.result.width(s));
  var t_infix_65 = (ok1(s, t_call_64) && (t_call_64 / 2));
  var t_call_66 = (ok1(s, s.result) && s.result.height(s));
  var t_infix_67 = (ok1(s, t_call_66) && (t_call_66 / 2));
  s.rt.logObjectMutation(/* splash inst pic */ s.d.$splashinstpic);
  (ok3(s, /* splash inst pic */ s.d.$splashinstpic, t_infix_65, t_infix_67) && /* splash inst pic */ s.d.$splashinstpic.set_pos(t_infix_65, t_infix_67, s));
  (s.pc = "R7jQj9N5A9qBleeA");
  var t_call_68 = (ok1(s, s.result) && s.result.width(s));
  s.rt.logObjectMutation(/* splash inst pic */ s.d.$splashinstpic);
  (ok2(s, /* splash inst pic */ s.d.$splashinstpic, t_call_68) && /* splash inst pic */ s.d.$splashinstpic.set_width(t_call_68, s));
  (s.pc = "b8swHpRj6tq8ZiGD");
  s.rt.logObjectMutation(/* splash inst pic */ s.d.$splashinstpic);
  (ok1(s, /* splash inst pic */ s.d.$splashinstpic) && /* splash inst pic */ s.d.$splashinstpic.hide(s));
  return s.rt.leave();
}
cs.registerStep(a_splashscreen$9, 'a_splashscreen$9');

/* ACTION: game begin */
function a_gamebegin(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamebegin$0;
  s.name = "game begin";
  return s;
}
cs.registerAction("game begin", "gamebegin", a_gamebegin, true);

function a_gamebegin$0(s) {
  (s.pc = "DXRSHyleRrqFZ7xP");
  return s.rt.enter(a_gamemetricsinit(s, a_gamebegin$2));
}
cs.registerStep(a_gamebegin$0, 'a_gamebegin$0');

function a_gamebegin$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "HK24Jsl9j7v4lx2d");
  return s.rt.enter(a_gameboardinit(s, a_gamebegin$3));
}
cs.registerStep(a_gamebegin$2, 'a_gamebegin$2');

function a_gamebegin$3(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "G0S4K0AYnORlXGWW");
  return s.rt.enter(a_gameactorsinit(s, a_gamebegin$4));
}
cs.registerStep(a_gamebegin$3, 'a_gamebegin$3');

function a_gamebegin$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "o1VJqTNYu4PkpIHS");
  var t_call_3 = lib.Time.now(s);
  s.d.$$localpersistentvars.perform_set("$nexttime", t_call_3, s);
  s.rt.logDataWrite();
  return s.rt.leave();
}
cs.registerStep(a_gamebegin$4, 'a_gamebegin$4');

/* ACTION: gate bars collide with rabbit? */
function a_gatebarscollidewithr(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebarscollidewithr$0;
  s.name = "gate bars collide with rabbit?";
  s.$collide = undefined;
  s.$gate = undefined;
  return s;
}
cs.registerAction("gate bars collide with rabbit?", "gatebarscollidewithr", a_gatebarscollidewithr, true);

function a_gatebarscollidewithr$0(s) {
  (s.pc = "UDCJuJMtSrPyhFce");
  var t_call_0 = (ok2(s, /* rabbit */ s.d.$rabbit, /* gates */ s.d.$gates) && /* rabbit */ s.d.$rabbit.overlap_with(/* gates */ s.d.$gates, s));
  (s.$collide = t_call_0);
  (s.pc = "Ybo0cg7SUUvpUPSL");
  s.t_collArr_1 = (ok1(s, s.$collide) && s.$collide.get_enumerator());
  s.t_idx_2 = 0;
  return a_gatebarscollidewithr$3;
}
cs.registerStep(a_gatebarscollidewithr$0, 'a_gatebarscollidewithr$0');

function a_gatebarscollidewithr$3(s) {
  if ((s.t_idx_2 < (s.t_collArr_1.length))) {
  (s.$gate = s.t_collArr_1[(s.t_idx_2)]);
  (s.t_idx_2++);
  return s.rt.enter(a_gateisactive(s, a_gatebarscollidewithr$6, s.$gate));
  }
  return s.rt.leave();
}
cs.registerStep(a_gatebarscollidewithr$3, 'a_gatebarscollidewithr$3');

function a_gatebarscollidewithr$6(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  if (t_actRes_3) {
  (s.pc = "xZ2UdVlX7WKZofph");
  return s.rt.enter(a_soundplay(s, a_gatebarscollidewithr$7, /* through gate */ s.d.$throughgate));
  }
  return a_gatebarscollidewithr$5;
}
cs.registerStep(a_gatebarscollidewithr$6, 'a_gatebarscollidewithr$6');

function a_gatebarscollidewithr$7(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  (s.pc = "u4C4F4OkTUAhuOtn");
  return s.rt.enter(a_gateexplode(s, a_gatebarscollidewithr$8, s.$gate));
}
cs.registerStep(a_gatebarscollidewithr$7, 'a_gatebarscollidewithr$7');

function a_gatebarscollidewithr$5(s) {
  return a_gatebarscollidewithr$3;
}
cs.registerStep(a_gatebarscollidewithr$5, 'a_gatebarscollidewithr$5');

function a_gatebarscollidewithr$8(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  return a_gatebarscollidewithr$5;
}
cs.registerStep(a_gatebarscollidewithr$8, 'a_gatebarscollidewithr$8');

/* ACTION: turtles collide with rabbit? */
function a_turtlescollidewithra(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtlescollidewithra$0;
  s.name = "turtles collide with rabbit?";
  s.$collide = undefined;
  s.$turtle = undefined;
  return s;
}
cs.registerAction("turtles collide with rabbit?", "turtlescollidewithra", a_turtlescollidewithra, true);

function a_turtlescollidewithra$0(s) {
  (s.pc = "PFChqcaH0eN8hHZu");
  var t_call_0 = (ok2(s, /* rabbit */ s.d.$rabbit, /* turtles */ s.d.$turtles) && /* rabbit */ s.d.$rabbit.overlap_with(/* turtles */ s.d.$turtles, s));
  (s.$collide = t_call_0);
  (s.pc = "YUqLRrWMol37mlOn");
  s.t_collArr_1 = (ok1(s, s.$collide) && s.$collide.get_enumerator());
  s.t_idx_2 = 0;
  return a_turtlescollidewithra$3;
}
cs.registerStep(a_turtlescollidewithra$0, 'a_turtlescollidewithra$0');

function a_turtlescollidewithra$3(s) {
  if ((s.t_idx_2 < (s.t_collArr_1.length))) {
  (s.$turtle = s.t_collArr_1[(s.t_idx_2)]);
  (s.t_idx_2++);
  return s.rt.enter(a_turtleisactive(s, a_turtlescollidewithra$6, s.$turtle));
  }
  return s.rt.leave();
}
cs.registerStep(a_turtlescollidewithra$3, 'a_turtlescollidewithra$3');

function a_turtlescollidewithra$6(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  if (t_actRes_3) {
  (s.pc = "xlJ4oYVN38wvDRp4");
  return s.rt.enter(a_rabbittakesahitfromt(s, a_turtlescollidewithra$7, s.$turtle));
  }
  return a_turtlescollidewithra$5;
}
cs.registerStep(a_turtlescollidewithra$6, 'a_turtlescollidewithra$6');

function a_turtlescollidewithra$7(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  return a_turtlescollidewithra$5;
}
cs.registerStep(a_turtlescollidewithra$7, 'a_turtlescollidewithra$7');

function a_turtlescollidewithra$5(s) {
  return a_turtlescollidewithra$3;
}
cs.registerStep(a_turtlescollidewithra$5, 'a_turtlescollidewithra$5');

/* ACTION: rabbit takes a hit from turtle */
function a_rabbittakesahitfromt(previous, returnAddr, $turtle) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_rabbittakesahitfromt$0;
  s.name = "rabbit takes a hit from turtle";
  s.$turtle = $turtle;
  s.$sprite = undefined;
  return s;
}
cs.registerAction("rabbit takes a hit from turtle", "rabbittakesahitfromt", a_rabbittakesahitfromt, true);

function a_rabbittakesahitfromt$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "LkU1MD0CkHvqzHMo");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "sMH9k8vr2ONaC2P3");
  return s.rt.enter(a_spritetopic(s, a_rabbittakesahitfromt$4, s.$turtle));
  } else {
  (s.pc = "NJjvR18AaAc1efA5");
  null;
  }
  return a_rabbittakesahitfromt$3;
}
cs.registerStep(a_rabbittakesahitfromt$0, 'a_rabbittakesahitfromt$0');

function a_rabbittakesahitfromt$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (s.$sprite = t_actRes_2);
  (s.pc = "t2PeW14KkLLN2fmS");
  s.rt.logObjectMutation(s.$sprite);
  var t_resumeCtx_3 = s.rt.getBlockingResumeCtx(a_rabbittakesahitfromt$5);
  (ok2(s, s.$sprite, /* redturtle */ s.d.$redturtle) && s.$sprite.set_picture(/* redturtle */ s.d.$redturtle, t_resumeCtx_3));
  return a_rabbittakesahitfromt$5;
}
cs.registerStep(a_rabbittakesahitfromt$4, 'a_rabbittakesahitfromt$4');

function a_rabbittakesahitfromt$3(s) {
  (s.pc = "xBpOh2MHKFfg27Pg");
  s.rt.logObjectMutation(s.$turtle);
  (ok1(s, s.$turtle) && s.$turtle.set_speed(0, 0, s));
  (s.pc = "UmmUwvclKv95Pfls");
  var t_call_4 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$turtle);
  (ok2(s, s.$turtle, t_call_4) && s.$turtle.set_color(t_call_4, s));
  (s.pc = "Iy4Uba3cC4wcPegY");
  var t_call_5 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$turtle) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$turtle, s));
  if (t_call_5) {
  t_call_5.perform_set("ihmdFpqLyY4EhWsv", true, s);
  }
  (s.pc = "DHHeTCdtyx4HFWzR");
  return s.rt.enter(a_rabbithealthdecrease(s, a_rabbittakesahitfromt$7));
}
cs.registerStep(a_rabbittakesahitfromt$3, 'a_rabbittakesahitfromt$3');

function a_rabbittakesahitfromt$5(s) {
  (s.pc = "PTbp3khrSjyuSuWv");
  s.rt.logObjectMutation(s.$sprite);
  (ok1(s, s.$sprite) && s.$sprite.set_width(80, s));
  return a_rabbittakesahitfromt$3;
}
cs.registerStep(a_rabbittakesahitfromt$5, 'a_rabbittakesahitfromt$5');

function a_rabbittakesahitfromt$7(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  return s.rt.leave();
}
cs.registerStep(a_rabbittakesahitfromt$7, 'a_rabbittakesahitfromt$7');

/* ACTION: sprite to pic */
function a_spritetopic(previous, returnAddr, $sprite) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_spritetopic$0;
  s.name = "sprite to pic";
  s.$sprite = $sprite;
  s.result = undefined;
  return s;
}
cs.registerAction("sprite to pic", "spritetopic", a_spritetopic, true);

function a_spritetopic$0(s) {
  (s.pc = "b8Mp9a7MCNJpL5gb");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$sprite) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$sprite, s));
  if (t_call_0) {
  var t_recOp_1 = t_call_0.perform_get("Ld20rZd6ffxy3foc", s);
  }
  (s.result = t_recOp_1);
  return s.rt.leave();
}
cs.registerStep(a_spritetopic$0, 'a_spritetopic$0');

/* ACTION: shells collide with rabbit? */
function a_shellscollidewithrab(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_shellscollidewithrab$0;
  s.name = "shells collide with rabbit?";
  s.$collide = undefined;
  s.$shell = undefined;
  return s;
}
cs.registerAction("shells collide with rabbit?", "shellscollidewithrab", a_shellscollidewithrab, true);

function a_shellscollidewithrab$0(s) {
  (s.pc = "MhTmbfhM9734dHMs");
  var t_call_0 = (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.x(s));
  var t_call_1 = (ok1(s, /* rabbit */ s.d.$rabbit) && /* rabbit */ s.d.$rabbit.y(s));
  s.rt.logObjectMutation(/* rabbit invisible large */ s.d.$rabbitinvisiblelarge);
  (ok3(s, /* rabbit invisible large */ s.d.$rabbitinvisiblelarge, t_call_0, t_call_1) && /* rabbit invisible large */ s.d.$rabbitinvisiblelarge.set_pos(t_call_0, t_call_1, s));
  (s.pc = "lk5lEjP4Jb22gEKL");
  var t_call_2 = (ok2(s, /* rabbit invisible large */ s.d.$rabbitinvisiblelarge, /* shells */ s.d.$shells) && /* rabbit invisible large */ s.d.$rabbitinvisiblelarge.overlap_with(/* shells */ s.d.$shells, s));
  (s.$collide = t_call_2);
  var t_elseIf_3 = true;
  (s.pc = "UQLiTsLHzOJxjUPa");
  var t_call_4 = (ok1(s, s.$collide) && s.$collide.count(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 > 0));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "S0xqZ4qa2B0R4rSz");
  return s.rt.enter(a_soundplay(s, a_shellscollidewithrab$3, /* got shell */ s.d.$gotshell));
  } else {
  (s.pc = "WNa4iSBSGV8y1oxu");
  null;
  }
  return a_shellscollidewithrab$2;
}
cs.registerStep(a_shellscollidewithrab$0, 'a_shellscollidewithrab$0');

function a_shellscollidewithrab$3(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  (s.pc = "fKSSuZgGbFfCoKlK");
  s.t_collArr_7 = (ok1(s, s.$collide) && s.$collide.get_enumerator());
  s.t_idx_8 = 0;
  return a_shellscollidewithrab$5;
}
cs.registerStep(a_shellscollidewithrab$3, 'a_shellscollidewithrab$3');

function a_shellscollidewithrab$2(s) {
  return s.rt.leave();
}
cs.registerStep(a_shellscollidewithrab$2, 'a_shellscollidewithrab$2');

function a_shellscollidewithrab$5(s) {
  if ((s.t_idx_8 < (s.t_collArr_7.length))) {
  (s.$shell = s.t_collArr_7[(s.t_idx_8)]);
  (s.t_idx_8++);
  (s.pc = "C7KrxqMwH2OK5RbL");
  var t_call_9 = lib.Colors.magenta(s);
  s.rt.logObjectMutation(s.$shell);
  (ok2(s, s.$shell, t_call_9) && s.$shell.set_color(t_call_9, s));
  return a_shellscollidewithrab$5;
  }
  return a_shellscollidewithrab$2;
}
cs.registerStep(a_shellscollidewithrab$5, 'a_shellscollidewithrab$5');

cs.registerArtResource("Picture", "$tinywabbit", ".\u002fart\u002fl0_tinywabbit");
cs.registerArtResource("Picture", "$tinywurtle", ".\u002fart\u002fl0_tinywurtle");
cs.registerArtResource("Picture", "$tinycarrot", ".\u002fart\u002fl0_tinycarrot");
cs.registerArtResource("Sound", "$throughgate", ".\u002fart\u002fl0_throughgate");
cs.registerArtResource("Sound", "$gotshell", ".\u002fart\u002fl0_gotshell");
cs.registerArtResource("Sound", "$healthdown", ".\u002fart\u002fl0_healthdown");
cs.registerArtResource("Sound", "$turtleSquish", ".\u002fart\u002fl0_turtleSquish");
cs.registerArtResource("Sound", "$gong", ".\u002fart\u002fl0_gong");
cs.registerArtResource("Sound", "$enemyentry", ".\u002fart\u002fl0_enemyentry");
cs.registerArtResource("Sound", "$gotcarrot", ".\u002fart\u002fl0_gotcarrot");
cs.registerArtResource("Sound", "$carrotenter", ".\u002fart\u002fl0_carrotenter");
/* ACTION: gate bar add */
function a_gatebaradd(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebaradd$0;
  s.name = "gate bar add";
  s.result = undefined;
  s.$x = undefined;
  s.$y = undefined;
  return s;
}
cs.registerAction("gate bar add", "gatebaradd", a_gatebaradd, true);

function a_gatebaradd$0(s) {
  (s.pc = "RgA7lqKedlJ1b37R");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_rectangle(20, 6, s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "YwajEU2XWwZwAiNO");
  s.rt.logObjectMutation(/* gates */ s.d.$gates);
  var t_call_1 = (ok2(s, /* gates */ s.d.$gates, s.result) && /* gates */ s.d.$gates.add(s.result, s));
  t_call_1;
  (s.pc = "MhON7E3JSwaZAo5e");
  var t_call_2 = lib.Colors.green(s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_2) && s.result.set_color(t_call_2, s));
  (s.pc = "bFLVbd35ovp8eVtq");
  var t_call_3 = lib.Math_.random(360, s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_3) && s.result.set_angle(t_call_3, s));
  (s.pc = "LaGPuXVHwOTfY1L2");
  var t_infix_4 = (0 - 25);
  var t_call_5 = lib.Math_.random(50, s);
  var t_infix_6 = (ok2(s, t_infix_4, t_call_5) && (t_infix_4 + t_call_5));
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_infix_6) && s.result.set_angular_speed(t_infix_6, s));
  (s.pc = "r8H4e4RkTLZh4p7B");
  var t_infix_7 = (0 - 15);
  var t_call_8 = lib.Math_.random(30, s);
  var t_infix_9 = (ok2(s, t_infix_7, t_call_8) && (t_infix_7 + t_call_8));
  var t_infix_10 = (0 - 15);
  var t_call_11 = lib.Math_.random(30, s);
  var t_infix_12 = (ok2(s, t_infix_10, t_call_11) && (t_infix_10 + t_call_11));
  s.rt.logObjectMutation(s.result);
  (ok3(s, s.result, t_infix_9, t_infix_12) && s.result.set_speed(t_infix_9, t_infix_12, s));
  (s.pc = "x0cexZhgUl5z2Uac");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.set_opacity(0.3, s));
  (s.pc = "bomjzrahBAA9wahw");
  var t_call_13 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_call_14 = (ok1(s, t_call_13) && lib.Math_.random(t_call_13, s));
  (s.$x = t_call_14);
  (s.pc = "xagcYnsbNkjRPGrO");
  var t_call_15 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_call_16 = (ok1(s, t_call_15) && lib.Math_.random(t_call_15, s));
  (s.$y = t_call_16);
  (s.pc = "bzxVMVqa2MaTnMTn");
  s.rt.logObjectMutation(s.result);
  (ok3(s, s.result, s.$x, s.$y) && s.result.set_pos(s.$x, s.$y, s));
  (s.pc = "g0mn1R8g6EN474By");
  var t_call_17 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.result) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.result, s));
  if (t_call_17) {
  t_call_17.perform_set("ihmdFpqLyY4EhWsv", false, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_gatebaradd$0, 'a_gatebaradd$0');

/* ACTION: gate bombs explode */
function a_gatebombsexplode(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebombsexplode$0;
  s.name = "gate bombs explode";
  s.$gate = $gate;
  s.$diminish = undefined;
  s.$expansion = undefined;
  s.$sprdec = undefined;
  s.$b1 = undefined;
  s.$b2 = undefined;
  s.$op = undefined;
  s.$diam = undefined;
  return s;
}
cs.registerAction("gate bombs explode", "gatebombsexplode", a_gatebombsexplode, true);

function a_gatebombsexplode$0(s) {
  (s.pc = "Hc5Jg5hrMdoBr9sy");
  (s.$diminish = 0.4);
  (s.pc = "py42XI5bIwCbESFY");
  (s.$expansion = 60);
  (s.pc = "kQCbVcsCgr7JM3KF");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  (s.$sprdec = t_call_0);
  (s.pc = "rUILls9SkVT5fp5E");
  if (s.$sprdec) {
  var t_recOp_1 = s.$sprdec.perform_get("Ld20rZd6ffxy3foc", s);
  }
  (s.$b1 = t_recOp_1);
  (s.pc = "nwOtzU9C6cCbF62H");
  if (s.$sprdec) {
  var t_recOp_2 = s.$sprdec.perform_get("F0T4JH1Mf01k1rr9", s);
  }
  (s.$b2 = t_recOp_2);
  (s.pc = "kr9yX2UaNy222JUw");
  var t_call_3 = (ok1(s, s.$b1) && s.$b1.opacity(s));
  (s.$op = t_call_3);
  (s.pc = "bV4UvUY5yi6h4cgb");
  var t_call_4 = (ok1(s, s.$b1) && s.$b1.width(s));
  (s.$diam = t_call_4);
  var t_elseIf_5 = true;
  (s.pc = "ZQtwAmpFmmxDTvmr");
  var t_infix_6 = (ok1(s, s.$op) && (s.$op > 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "ue3Cv4SNk7gbA4GE");
  var t_infix_7 = (ok2(s, s.$op, s.$diminish) && (s.$op - s.$diminish));
  s.rt.logObjectMutation(s.$b1);
  (ok2(s, s.$b1, t_infix_7) && s.$b1.set_opacity(t_infix_7, s));
  (s.pc = "jbT42kYgLvWjTfaP");
  var t_infix_8 = (ok2(s, s.$op, s.$diminish) && (s.$op - s.$diminish));
  s.rt.logObjectMutation(s.$b2);
  (ok2(s, s.$b2, t_infix_8) && s.$b2.set_opacity(t_infix_8, s));
  (s.pc = "TaZD382IBP236oa2");
  var t_infix_9 = (ok2(s, s.$diam, s.$expansion) && (s.$diam + s.$expansion));
  s.rt.logObjectMutation(s.$b1);
  (ok2(s, s.$b1, t_infix_9) && s.$b1.set_width(t_infix_9, s));
  (s.pc = "heaTezLeQhl0X1TM");
  var t_infix_10 = (ok2(s, s.$diam, s.$expansion) && (s.$diam + s.$expansion));
  s.rt.logObjectMutation(s.$b1);
  (ok2(s, s.$b1, t_infix_10) && s.$b1.set_height(t_infix_10, s));
  (s.pc = "cPmEH7yzVmGAuXgb");
  var t_infix_11 = (ok2(s, s.$diam, s.$expansion) && (s.$diam + s.$expansion));
  s.rt.logObjectMutation(s.$b2);
  (ok2(s, s.$b2, t_infix_11) && s.$b2.set_width(t_infix_11, s));
  (s.pc = "Q71MxW4c74POFaZ9");
  var t_infix_12 = (ok2(s, s.$diam, s.$expansion) && (s.$diam + s.$expansion));
  s.rt.logObjectMutation(s.$b2);
  (ok2(s, s.$b2, t_infix_12) && s.$b2.set_height(t_infix_12, s));
  (s.pc = "lxwiPfchMmvIV4bA");
  var t_call_13 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$b1);
  (ok2(s, s.$b1, t_call_13) && s.$b1.set_color(t_call_13, s));
  (s.pc = "Oi4FUVk9eqzgz5Pr");
  var t_call_14 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$b2);
  (ok2(s, s.$b2, t_call_14) && s.$b2.set_color(t_call_14, s));
  (s.pc = "x1z8HAk59pmGdk3r");
  var t_call_15 = (ok2(s, s.$b1, /* turtles */ s.d.$turtles) && s.$b1.overlap_with(/* turtles */ s.d.$turtles, s));
  return s.rt.enter(a_turtleskill(s, a_gatebombsexplode$5, t_call_15));
  } else {
  (s.pc = "rmXrDOcH0A5RaDLp");
  return s.rt.enter(a_gatefree(s, a_gatebombsexplode$7, s.$gate));
  }
  return a_gatebombsexplode$4;
}
cs.registerStep(a_gatebombsexplode$0, 'a_gatebombsexplode$0');

function a_gatebombsexplode$5(s) {
  var t_actRes_16 = s.rt.returnedFrom.result;
  t_actRes_16;
  (s.pc = "qwid3AzjJcAai9cq");
  var t_call_17 = (ok2(s, s.$b2, /* turtles */ s.d.$turtles) && s.$b2.overlap_with(/* turtles */ s.d.$turtles, s));
  return s.rt.enter(a_turtleskill(s, a_gatebombsexplode$6, t_call_17));
}
cs.registerStep(a_gatebombsexplode$5, 'a_gatebombsexplode$5');

function a_gatebombsexplode$7(s) {
  var t_actRes_19 = s.rt.returnedFrom.result;
  t_actRes_19;
  return a_gatebombsexplode$4;
}
cs.registerStep(a_gatebombsexplode$7, 'a_gatebombsexplode$7');

function a_gatebombsexplode$4(s) {
  return s.rt.leave();
}
cs.registerStep(a_gatebombsexplode$4, 'a_gatebombsexplode$4');

function a_gatebombsexplode$6(s) {
  var t_actRes_18 = s.rt.returnedFrom.result;
  t_actRes_18;
  return a_gatebombsexplode$4;
}
cs.registerStep(a_gatebombsexplode$6, 'a_gatebombsexplode$6');

/* ACTION: turtle towards rabbit */
function a_turtletowardsrabbit(previous, returnAddr, $turtle) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtletowardsrabbit$0;
  s.name = "turtle towards rabbit";
  s.$turtle = $turtle;
  s.$turtle2 = undefined;
  s.$x = undefined;
  s.$y = undefined;
  s.$vx = undefined;
  s.$vy = undefined;
  return s;
}
cs.registerAction("turtle towards rabbit", "turtletowardsrabbit", a_turtletowardsrabbit, true);

function a_turtletowardsrabbit$0(s) {
  (s.pc = "xTdM221SEJH1LiIR");
  var t_call_0 = (ok1(s, /* turtles */ s.d.$turtles) && /* turtles */ s.d.$turtles.count(s));
  var t_call_1 = (ok1(s, t_call_0) && lib.Math_.random(t_call_0, s));
  var t_call_2 = (ok2(s, /* turtles */ s.d.$turtles, t_call_1) && /* turtles */ s.d.$turtles.at(t_call_1, s));
  (s.$turtle2 = t_call_2);
  var t_elseIf_3 = true;
  (s.pc = "x22Y1VL8kI8aQ4GG");
  var t_call_4 = (ok2(s, s.$turtle2, s.$turtle) && s.$turtle2.equals(s.$turtle, s));
  var t_call_5 = (ok1(s, t_call_4) && lib.Boolean_.not(t_call_4, s));
  ok1(s, t_call_5);
  if (t_call_5) {
  (s.pc = "xmGzW2kJCqsaQhdX");
  var t_infix_6 = (0 - 25);
  s.rt.logObjectMutation(s.$turtle);
  (ok3(s, s.$turtle, s.$turtle2, t_infix_6) && s.$turtle.speed_towards(s.$turtle2, t_infix_6, s));
  (s.pc = "LcZyiHSTFMFWiPHV");
  var t_call_7 = (ok1(s, s.$turtle) && s.$turtle.speed_x(s));
  (s.$x = t_call_7);
  (s.pc = "VezI97VSN4jy924j");
  var t_call_8 = (ok1(s, s.$turtle) && s.$turtle.speed_y(s));
  (s.$y = t_call_8);
  (s.pc = "F2Se1ASXm44eLQAP");
  s.rt.logObjectMutation(s.$turtle);
  (ok2(s, s.$turtle, /* rabbit */ s.d.$rabbit) && s.$turtle.speed_towards(/* rabbit */ s.d.$rabbit, 100, s));
  (s.pc = "dQjgQhPQ3WEuHDRp");
  var t_call_9 = (ok1(s, s.$turtle) && s.$turtle.speed_x(s));
  var t_infix_10 = (ok2(s, t_call_9, s.$x) && (t_call_9 + s.$x));
  (s.$vx = t_infix_10);
  (s.pc = "i9ckwcPUCoOp0nvN");
  var t_call_11 = (ok1(s, s.$turtle) && s.$turtle.speed_y(s));
  var t_infix_12 = (ok2(s, t_call_11, s.$y) && (t_call_11 + s.$y));
  (s.$vy = t_infix_12);
  (s.pc = "xwmnQZC4n4Aq6fgo");
  s.rt.logObjectMutation(s.$turtle);
  (ok3(s, s.$turtle, s.$vx, s.$vy) && s.$turtle.set_speed(s.$vx, s.$vy, s));
  } else {
  (s.pc = "kcnU9B2yVzy7D9mq");
  s.rt.logObjectMutation(s.$turtle);
  (ok2(s, s.$turtle, /* rabbit */ s.d.$rabbit) && s.$turtle.speed_towards(/* rabbit */ s.d.$rabbit, 100, s));
  }
  return s.rt.leave();
}
cs.registerStep(a_turtletowardsrabbit$0, 'a_turtletowardsrabbit$0');

/* ACTION: banner score init */
function a_bannerscoreinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerscoreinit$0;
  s.name = "banner score init";
  s.results = [];
  s.results[0] = undefined;
  s.results[1] = undefined;
  return s;
}
cs.registerAction("banner score init", "bannerscoreinit", a_bannerscoreinit, true);

function a_bannerscoreinit$0(s) {
  (s.pc = "MosQMrHRA4j2B4gt");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 24, "0", s));
  s.rt.markAllocated(t_call_0);
  (s.results[0] = t_call_0);
  (s.pc = "GCTgZbAH8XUmLJaz");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 * 0.2));
  s.rt.logObjectMutation(s.results[0]);
  (ok2(s, s.results[0], t_infix_2) && s.results[0].set_pos(t_infix_2, 15, s));
  (s.pc = "xF24CcXUuoH0crms");
  var t_call_3 = lib.Colors.yellow(s);
  s.rt.logObjectMutation(s.results[0]);
  (ok2(s, s.results[0], t_call_3) && s.results[0].set_color(t_call_3, s));
  (s.pc = "xEDlScyI1hwX0HPl");
  if (/* options */ s.d.$options) {
  var t_recOp_4 = /* options */ s.d.$options[("$high score")];
  }
  var t_call_5 = (ok1(s, t_recOp_4) && lib.Number_.to_string(t_recOp_4, s));
  var t_concat_6 = lib.String_.concatAny("high score\u003a ", t_call_5);
  var t_call_7 = (ok2(s, /* board */ s.d.$board, t_concat_6) && /* board */ s.d.$board.create_text(100, 20, 12, t_concat_6, s));
  s.rt.markAllocated(t_call_7);
  (s.results[1] = t_call_7);
  (s.pc = "xsEwum30w3Gsmi3P");
  var t_call_8 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_9 = (ok1(s, t_call_8) && (t_call_8 * 0.2));
  s.rt.logObjectMutation(s.results[1]);
  (ok2(s, s.results[1], t_infix_9) && s.results[1].set_pos(t_infix_9, 40, s));
  return s.rt.leave();
}
cs.registerStep(a_bannerscoreinit$0, 'a_bannerscoreinit$0');

/* ACTION: banner health init */
function a_bannerhealthinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerhealthinit$0;
  s.name = "banner health init";
  s.result = undefined;
  s.$h = undefined;
  return s;
}
cs.registerAction("banner health init", "bannerhealthinit", a_bannerhealthinit, true);

function a_bannerhealthinit$0(s) {
  (s.pc = "Mer5qL99OPK3SdwT");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_rectangle(100, 10, s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "x3WTCUtpH8bzoUg6");
  var t_call_1 = lib.Colors.cyan(s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_1) && s.result.set_color(t_call_1, s));
  (s.pc = "DocV0uOHbJwa0b8a");
  var t_call_2 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_3 = (ok1(s, t_call_2) && (t_call_2 * 0.8));
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_infix_3) && s.result.set_pos(t_infix_3, 20, s));
  (s.pc = "xDcIZr562E1D14eh");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 12, "health", s));
  s.rt.markAllocated(t_call_4);
  (s.$h = t_call_4);
  (s.pc = "MidJrDWlzr8KrO1F");
  var t_call_5 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 * 0.8));
  s.rt.logObjectMutation(s.$h);
  (ok2(s, s.$h, t_infix_6) && s.$h.set_pos(t_infix_6, 40, s));
  return s.rt.leave();
}
cs.registerStep(a_bannerhealthinit$0, 'a_bannerhealthinit$0');

/* ACTION: banner multiplier init */
function a_bannermultiplierinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannermultiplierinit$0;
  s.name = "banner multiplier init";
  s.result = undefined;
  s.$sprite = undefined;
  return s;
}
cs.registerAction("banner multiplier init", "bannermultiplierinit", a_bannermultiplierinit, true);

function a_bannermultiplierinit$0(s) {
  (s.pc = "xAOd2slyra9gEXvj");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 24, "x1", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "xtiROaxvZsQIed2U");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 / 2));
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_infix_2) && s.result.set_pos(t_infix_2, 15, s));
  (s.pc = "belTTSk4DWCtBRqU");
  var t_call_3 = lib.Colors.magenta(s);
  s.rt.logObjectMutation(s.result);
  (ok2(s, s.result, t_call_3) && s.result.set_color(t_call_3, s));
  (s.pc = "kyU3VxRyh56Kth9H");
  var t_call_4 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 12, "point multiplier", s));
  s.rt.markAllocated(t_call_4);
  (s.$sprite = t_call_4);
  (s.pc = "WA7K5OY2VW2CCqx2");
  var t_call_5 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 / 2));
  s.rt.logObjectMutation(s.$sprite);
  (ok2(s, s.$sprite, t_infix_6) && s.$sprite.set_pos(t_infix_6, 40, s));
  return s.rt.leave();
}
cs.registerStep(a_bannermultiplierinit$0, 'a_bannermultiplierinit$0');

/* ACTION: game update remainder */
function a_gameupdateremainder(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameupdateremainder$0;
  s.name = "game update remainder";
  s.$x = undefined;
  return s;
}
cs.registerAction("game update remainder", "gameupdateremainder", a_gameupdateremainder, true);

function a_gameupdateremainder$0(s) {
  (s.pc = "x3FO09jkW58RR6o8");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_0 = /* metrics */ s.d.$metrics[("$update")];
  }
  (s.$x = t_recOp_0);
  var t_elseIf_1 = true;
  (s.pc = "FjKZ1hN5qx0tFXP6");
  var t_infix_2 = (ok1(s, s.$x) && (s.$x > 0));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.pc = "TlmzXFeuuYAgal48");
  var t_infix_3 = (ok1(s, s.$x) && (s.$x - 1));
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$update", t_infix_3, s);
  }
  } else {
  (s.pc = "OEwXSjMS8lhE3cED");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$update", 3, s);
  }
  (s.pc = "hctyX5GAWuZP8OKx");
  return s.rt.enter(a_shellsupdate(s, a_gameupdateremainder$6));
  }
  return a_gameupdateremainder$3;
}
cs.registerStep(a_gameupdateremainder$0, 'a_gameupdateremainder$0');

function a_gameupdateremainder$6(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  t_actRes_4;
  (s.pc = "KD0vC46mbtGE52l0");
  return s.rt.enter(a_turtlesupdate(s, a_gameupdateremainder$7));
}
cs.registerStep(a_gameupdateremainder$6, 'a_gameupdateremainder$6');

function a_gameupdateremainder$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_gameupdateremainder$3, 'a_gameupdateremainder$3');

function a_gameupdateremainder$7(s) {
  var t_actRes_5 = s.rt.returnedFrom.result;
  t_actRes_5;
  (s.pc = "JDBFYAWBOmahwKeK");
  return s.rt.enter(a_gatesupdate(s, a_gameupdateremainder$8));
}
cs.registerStep(a_gameupdateremainder$7, 'a_gameupdateremainder$7');

function a_gameupdateremainder$8(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  t_actRes_6;
  (s.pc = "Xn4yRmYb3ux4G2Pb");
  return s.rt.enter(a_carrotupdate(s, a_gameupdateremainder$9));
}
cs.registerStep(a_gameupdateremainder$8, 'a_gameupdateremainder$8');

function a_gameupdateremainder$9(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  (s.pc = "aXJ2IBGuf2RK3jYd");
  return s.rt.enter(a_bannerhealthupdate(s, a_gameupdateremainder$10));
}
cs.registerStep(a_gameupdateremainder$9, 'a_gameupdateremainder$9');

function a_gameupdateremainder$10(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  (s.pc = "CxkwL81c3T9A2lBo");
  return s.rt.enter(a_bannerscoreupdate(s, a_gameupdateremainder$11));
}
cs.registerStep(a_gameupdateremainder$10, 'a_gameupdateremainder$10');

function a_gameupdateremainder$11(s) {
  var t_actRes_9 = s.rt.returnedFrom.result;
  t_actRes_9;
  (s.pc = "x9we0MVDnuLxHEwm");
  return s.rt.enter(a_bannermultiplierupda(s, a_gameupdateremainder$12));
}
cs.registerStep(a_gameupdateremainder$11, 'a_gameupdateremainder$11');

function a_gameupdateremainder$12(s) {
  var t_actRes_10 = s.rt.returnedFrom.result;
  t_actRes_10;
  return a_gameupdateremainder$3;
}
cs.registerStep(a_gameupdateremainder$12, 'a_gameupdateremainder$12');

/* ACTION: game collisions */
function a_gamecollisions(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gamecollisions$0;
  s.name = "game collisions";
  return s;
}
cs.registerAction("game collisions", "gamecollisions", a_gamecollisions, true);

function a_gamecollisions$0(s) {
  (s.pc = "xY6Rr6JozHO8WyjS");
  return s.rt.enter(a_gatebombscollidewith(s, a_gamecollisions$2));
}
cs.registerStep(a_gamecollisions$0, 'a_gamecollisions$0');

function a_gamecollisions$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "w1zFAbGJYf0j7X0u");
  return s.rt.enter(a_gatebarscollidewithr(s, a_gamecollisions$3));
}
cs.registerStep(a_gamecollisions$2, 'a_gamecollisions$2');

function a_gamecollisions$3(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "yWf9w6fHpnwExdYV");
  return s.rt.enter(a_turtlescollidewithra(s, a_gamecollisions$4));
}
cs.registerStep(a_gamecollisions$3, 'a_gamecollisions$3');

function a_gamecollisions$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "dnsmW8jX9yL3vI8l");
  return s.rt.enter(a_shellscollidewithrab(s, a_gamecollisions$5));
}
cs.registerStep(a_gamecollisions$4, 'a_gamecollisions$4');

function a_gamecollisions$5(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return s.rt.leave();
}
cs.registerStep(a_gamecollisions$5, 'a_gamecollisions$5');

/* ACTION: gate bombs collide with rabbit? */
function a_gatebombscollidewith(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebombscollidewith$0;
  s.name = "gate bombs collide with rabbit?";
  s.$collide = undefined;
  s.$bomb = undefined;
  s.$gate = undefined;
  s.$dec = undefined;
  return s;
}
cs.registerAction("gate bombs collide with rabbit?", "gatebombscollidewith", a_gatebombscollidewith, true);

function a_gatebombscollidewith$0(s) {
  (s.pc = "xQL7ZvDq7pltvlYC");
  var t_call_0 = (ok2(s, /* rabbit */ s.d.$rabbit, /* bombs */ s.d.$bombs) && /* rabbit */ s.d.$rabbit.overlap_with(/* bombs */ s.d.$bombs, s));
  (s.$collide = t_call_0);
  (s.pc = "DHoFTOaIwI2bOXd1");
  s.t_collArr_1 = (ok1(s, s.$collide) && s.$collide.get_enumerator());
  s.t_idx_2 = 0;
  return a_gatebombscollidewith$3;
}
cs.registerStep(a_gatebombscollidewith$0, 'a_gatebombscollidewith$0');

function a_gatebombscollidewith$3(s) {
  if ((s.t_idx_2 < (s.t_collArr_1.length))) {
  (s.$bomb = s.t_collArr_1[(s.t_idx_2)]);
  (s.t_idx_2++);
  (s.pc = "xKXuwtYxMKCdm4VX");
  var t_call_3 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$bomb) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$bomb, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("Ld20rZd6ffxy3foc", s);
  }
  (s.$gate = t_recOp_4);
  var t_elseIf_5 = true;
  (s.pc = "S2uSI4UWMY4MIktN");
  return s.rt.enter(a_gateisactive(s, a_gatebombscollidewith$6, s.$gate));
  }
  return s.rt.leave();
}
cs.registerStep(a_gatebombscollidewith$3, 'a_gatebombscollidewith$3');

function a_gatebombscollidewith$6(s) {
  var t_actRes_6 = s.rt.returnedFrom.result;
  ok1(s, t_actRes_6);
  if (t_actRes_6) {
  (s.pc = "nQGhHAtlETljLxjn");
  var t_call_7 = lib.Colors.red(s);
  s.rt.logObjectMutation(s.$gate);
  (ok2(s, s.$gate, t_call_7) && s.$gate.set_color(t_call_7, s));
  (s.pc = "SU3zMdR9XbJt94f3");
  var t_call_8 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  (s.$dec = t_call_8);
  (s.pc = "TTOYmIhsRCLJfdet");
  if (s.$dec) {
  var t_recOp_9 = s.$dec.perform_get("Ld20rZd6ffxy3foc", s);
  }
  var t_call_10 = lib.Colors.red(s);
  s.rt.logObjectMutation(t_recOp_9);
  (ok2(s, t_recOp_9, t_call_10) && t_recOp_9.set_color(t_call_10, s));
  (s.pc = "PDmzGw78sIan7WvQ");
  if (s.$dec) {
  var t_recOp_11 = s.$dec.perform_get("F0T4JH1Mf01k1rr9", s);
  }
  var t_call_12 = lib.Colors.red(s);
  s.rt.logObjectMutation(t_recOp_11);
  (ok2(s, t_recOp_11, t_call_12) && t_recOp_11.set_color(t_call_12, s));
  (s.pc = "LF4CfPtIbaN1Oxak");
  return s.rt.enter(a_rabbithealthdecrease(s, a_gatebombscollidewith$10));
  } else {
  (s.pc = "RNfb4w127BU7r2uD");
  null;
  }
  return a_gatebombscollidewith$7;
}
cs.registerStep(a_gatebombscollidewith$6, 'a_gatebombscollidewith$6');

function a_gatebombscollidewith$10(s) {
  var t_actRes_13 = s.rt.returnedFrom.result;
  t_actRes_13;
  return a_gatebombscollidewith$7;
}
cs.registerStep(a_gatebombscollidewith$10, 'a_gatebombscollidewith$10');

function a_gatebombscollidewith$7(s) {
  return a_gatebombscollidewith$3;
}
cs.registerStep(a_gatebombscollidewith$7, 'a_gatebombscollidewith$7');

/* ACTION: gate free */
function a_gatefree(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatefree$0;
  s.name = "gate free";
  s.$gate = $gate;
  s.$b1 = undefined;
  s.$b2 = undefined;
  return s;
}
cs.registerAction("gate free", "gatefree", a_gatefree, true);

function a_gatefree$0(s) {
  (s.pc = "ntkVQOKOv5g2szRZ");
  s.rt.logObjectMutation(/* gates */ s.d.$gates);
  var t_call_0 = (ok2(s, /* gates */ s.d.$gates, s.$gate) && /* gates */ s.d.$gates.remove(s.$gate, s));
  t_call_0;
  (s.pc = "idH1YRKFjZ3hbgIe");
  s.rt.logObjectMutation(s.$gate);
  (ok1(s, s.$gate) && s.$gate.delete_(s));
  (s.pc = "sHvOPsOTSV2ziC4M");
  var t_call_1 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  if (t_call_1) {
  var t_recOp_2 = t_call_1.perform_get("Ld20rZd6ffxy3foc", s);
  }
  (s.$b1 = t_recOp_2);
  (s.pc = "iIE2Ao2a2bU6B5K7");
  var t_call_3 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("F0T4JH1Mf01k1rr9", s);
  }
  (s.$b2 = t_recOp_4);
  (s.pc = "fjS2LSqLxgVCNd1T");
  s.rt.logObjectMutation(/* bombs */ s.d.$bombs);
  var t_call_5 = (ok2(s, /* bombs */ s.d.$bombs, s.$b1) && /* bombs */ s.d.$bombs.remove(s.$b1, s));
  t_call_5;
  (s.pc = "rJ4TP20b3xHHgSOV");
  s.rt.logObjectMutation(/* bombs */ s.d.$bombs);
  var t_call_6 = (ok2(s, /* bombs */ s.d.$bombs, s.$b2) && /* bombs */ s.d.$bombs.remove(s.$b2, s));
  t_call_6;
  (s.pc = "Qcful593t40fa1N6");
  s.rt.logObjectMutation(s.$b1);
  (ok1(s, s.$b1) && s.$b1.delete_(s));
  (s.pc = "KAGQwnQh2EwbUXs4");
  s.rt.logObjectMutation(s.$b2);
  (ok1(s, s.$b2) && s.$b2.delete_(s));
  return s.rt.leave();
}
cs.registerStep(a_gatefree$0, 'a_gatefree$0');

/* ACTION: gate bar update */
function a_gatebarupdate(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gatebarupdate$0;
  s.name = "gate bar update";
  s.$gate = $gate;
  s.$da = undefined;
  s.$dx = undefined;
  s.$dy = undefined;
  s.$p = undefined;
  return s;
}
cs.registerAction("gate bar update", "gatebarupdate", a_gatebarupdate, true);

function a_gatebarupdate$0(s) {
  (s.pc = "K78bVtaWGakkAEmb");
  var t_infix_0 = (0 - 5);
  var t_call_1 = lib.Math_.random(10, s);
  var t_infix_2 = (ok2(s, t_infix_0, t_call_1) && (t_infix_0 + t_call_1));
  (s.$da = t_infix_2);
  (s.pc = "OyRkz3aW0G4qMEmT");
  var t_infix_3 = (0 - 5);
  var t_call_4 = lib.Math_.random(10, s);
  var t_infix_5 = (ok2(s, t_infix_3, t_call_4) && (t_infix_3 + t_call_4));
  (s.$dx = t_infix_5);
  (s.pc = "px98rQLsbfWu2AK5");
  var t_infix_6 = (0 - 5);
  var t_call_7 = lib.Math_.random(10, s);
  var t_infix_8 = (ok2(s, t_infix_6, t_call_7) && (t_infix_6 + t_call_7));
  (s.$dy = t_infix_8);
  (s.pc = "jpHznBurJzGaZ295");
  var t_call_9 = (ok1(s, s.$gate) && s.$gate.angular_speed(s));
  var t_infix_10 = (ok2(s, t_call_9, s.$da) && (t_call_9 + s.$da));
  var t_call_11 = (ok1(s, s.$gate) && s.$gate.speed_x(s));
  var t_infix_12 = (ok2(s, t_call_11, s.$dx) && (t_call_11 + s.$dx));
  var t_call_13 = (ok1(s, s.$gate) && s.$gate.speed_y(s));
  var t_infix_14 = (ok2(s, t_call_13, s.$dy) && (t_call_13 + s.$dy));
  var t_call_15 = (ok3(s, t_infix_10, t_infix_12, t_infix_14) && lib.Math_.create_vector3(t_infix_10, t_infix_12, t_infix_14, s));
  (s.$p = t_call_15);
  (s.pc = "LMMNtCAQfos20uvu");
  var t_infix_16 = (0 - 25);
  var t_infix_17 = (0 - 15);
  var t_infix_18 = (0 - 15);
  var t_call_19 = (ok3(s, t_infix_16, t_infix_17, t_infix_18) && lib.Math_.create_vector3(t_infix_16, t_infix_17, t_infix_18, s));
  var t_call_20 = lib.Math_.create_vector3(25, 15, 15, s);
  var t_call_21 = (ok3(s, s.$p, t_call_19, t_call_20) && s.$p.clamp(t_call_19, t_call_20, s));
  t_call_21;
  (s.pc = "vlSKr4E225Mesl7A");
  var t_call_22 = (ok1(s, s.$p) && s.$p.x(s));
  s.rt.logObjectMutation(s.$gate);
  (ok2(s, s.$gate, t_call_22) && s.$gate.set_angular_speed(t_call_22, s));
  (s.pc = "SvVWCMBcIXRcGxce");
  var t_call_23 = (ok1(s, s.$p) && s.$p.y(s));
  var t_call_24 = (ok1(s, s.$p) && s.$p.z(s));
  s.rt.logObjectMutation(s.$gate);
  (ok3(s, s.$gate, t_call_23, t_call_24) && s.$gate.set_speed(t_call_23, t_call_24, s));
  return s.rt.leave();
}
cs.registerStep(a_gatebarupdate$0, 'a_gatebarupdate$0');

cs.registerArtResource("Picture", "$title", ".\u002fart\u002fl0_title");

//Ent_Bb3B0aW9ucwaa
function Ent_Bb3B0aW9ucwaa(p) {
  this.parent = p;
}
Ent_Bb3B0aW9ucwaa.prototype = new lib.ObjectEntry();
Ent_Bb3B0aW9ucwaa.prototype.keys = [];
Ent_Bb3B0aW9ucwaa.prototype.values = ["$sounds", "$music", "$artwork", "$debug", "$high score"];
Ent_Bb3B0aW9ucwaa.prototype.fields = ["$sounds", "$music", "$artwork", "$debug", "$high score"];
Ent_Bb3B0aW9ucwaa.prototype["$sounds_realname"] = "sounds";
Ent_Bb3B0aW9ucwaa.prototype["$music_realname"] = "music";
Ent_Bb3B0aW9ucwaa.prototype["$artwork_realname"] = "artwork";
Ent_Bb3B0aW9ucwaa.prototype["$debug_realname"] = "debug";
Ent_Bb3B0aW9ucwaa.prototype["$high score_realname"] = "high score";
Ent_Bb3B0aW9ucwaa.prototype["$sounds"] = false;
Ent_Bb3B0aW9ucwaa.prototype["$music"] = false;
Ent_Bb3B0aW9ucwaa.prototype["$artwork"] = false;
Ent_Bb3B0aW9ucwaa.prototype["$debug"] = false;
Ent_Bb3B0aW9ucwaa.prototype["$high score"] = 0;
//Tbl_Bb3B0aW9ucwaa
function Tbl_Bb3B0aW9ucwaa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_Bb3B0aW9ucwaa.prototype = new lib.ObjectSingleton();
Tbl_Bb3B0aW9ucwaa.prototype.entryCtor = Ent_Bb3B0aW9ucwaa;
cs.objectSingletons["options type"] = function(d) { return d.$Bb3B0aW9ucwaa };
Tbl_Bb3B0aW9ucwaa.prototype.selfCtor = Tbl_Bb3B0aW9ucwaa;
Tbl_Bb3B0aW9ucwaa.prototype.stableName = "Bb3B0aW9ucwaa";
Tbl_Bb3B0aW9ucwaa.prototype.entryKindName = "options type";

// jsonimport
Ent_Bb3B0aW9ucwaa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
  this.perform_set("$sounds", ctx.importBoolean(json, "sounds"), s);
  this.perform_set("$music", ctx.importBoolean(json, "music"), s);
  this.perform_set("$artwork", ctx.importBoolean(json, "artwork"), s);
  this.perform_set("$debug", ctx.importBoolean(json, "debug"), s);
  this.perform_set("$high score", ctx.importNumber(json, "high score"), s);
}
cs.registerGlobal("$Bb3B0aW9ucwaa");
/* ACTION: options init */
function a_optionsinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_optionsinit$0;
  s.name = "options init";
  return s;
}
cs.registerAction("options init", "optionsinit", a_optionsinit, true);

function a_optionsinit$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ezI5qRDaaYEjjuIZ");
  true;
  if ((/* options */ s.d.$options == undefined)) {
  (s.pc = "xIrgiDqFP8Htigb4");
  var t_call_1 = (ok1(s, /* options type */ s.d.$Bb3B0aW9ucwaa) && /* options type */ s.d.$Bb3B0aW9ucwaa.create(s));
  s.rt.markAllocated(t_call_1);
  (/* options */ s.d.$options = t_call_1);
  s.rt.logDataWrite();
  (s.pc = "mvulRQNXV1Jg5442");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$artwork", true, s);
  }
  (s.pc = "xops7ZZT7rbXjeAT");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$music", true, s);
  }
  (s.pc = "xR5rxxCw4EwUPnBF");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$sounds", true, s);
  }
  (s.pc = "MtfO4SVdnIzVcgjB");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$debug", false, s);
  }
  (s.pc = "SUJaLMbxLiscI7V2");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$high score", 0, s);
  }
  } else {
  (s.pc = "RBMu0NXDz7klozkE");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_optionsinit$0, 'a_optionsinit$0');

/* ACTION: game update all */
function a_gameupdateall(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameupdateall$0;
  s.name = "game update all";
  return s;
}
cs.registerAction("game update all", "gameupdateall", a_gameupdateall, true);

function a_gameupdateall$0(s) {
  (s.pc = "QM0LoHGaa3Kb2w1Y");
  return s.rt.enter(a_rabbitupdate(s, a_gameupdateall$2));
}
cs.registerStep(a_gameupdateall$0, 'a_gameupdateall$0');

function a_gameupdateall$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "awJc4j7eZXIJs9R9");
  return s.rt.enter(a_gamecollisions(s, a_gameupdateall$3));
}
cs.registerStep(a_gameupdateall$2, 'a_gameupdateall$2');

function a_gameupdateall$3(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  t_actRes_1;
  (s.pc = "J0wY0M1DT9FAH8tc");
  return s.rt.enter(a_gameupdateremainder(s, a_gameupdateall$4));
}
cs.registerStep(a_gameupdateall$3, 'a_gameupdateall$3');

function a_gameupdateall$4(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "xGkpXUpHokQ2v6HA");
  return s.rt.enter(a_gamespawnactors(s, a_gameupdateall$5));
}
cs.registerStep(a_gameupdateall$4, 'a_gameupdateall$4');

function a_gameupdateall$5(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return s.rt.leave();
}
cs.registerStep(a_gameupdateall$5, 'a_gameupdateall$5');

/* ACTION: turtle update */
function a_turtleupdate(previous, returnAddr, $e) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtleupdate$0;
  s.name = "turtle update";
  s.$e = $e;
  s.$x2 = undefined;
  return s;
}
cs.registerAction("turtle update", "turtleupdate", a_turtleupdate, true);

function a_turtleupdate$0(s) {
  (s.pc = "TMRmGf4XL42gwk4C");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$e) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$e, s));
  (s.$x2 = t_call_0);
  s.t_elseIf_1 = true;
  (s.pc = "xW2WK2HcR2vIOyIC");
  if (s.$x2) {
  var t_recOp_2 = s.$x2.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  ok1(s, t_recOp_2);
  if (t_recOp_2) {
  (s.t_elseIf_1 = false);
  (s.pc = "EUrEs4SWBXAIlkxk");
  return s.rt.enter(a_turtlekill(s, a_turtleupdate$4, s.$e));
  }
  return a_turtleupdate$3;
}
cs.registerStep(a_turtleupdate$0, 'a_turtleupdate$0');

function a_turtleupdate$4(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return a_turtleupdate$3;
}
cs.registerStep(a_turtleupdate$4, 'a_turtleupdate$4');

function a_turtleupdate$3(s) {
  if (s.t_elseIf_1) {
  (s.pc = "Ac4iVVTT4FL0P6cN");
  var t_call_4 = (ok1(s, s.$e) && s.$e.opacity(s));
  var t_infix_5 = (ok1(s, t_call_4) && (t_call_4 < 0.8));
  ok1(s, t_infix_5);
  if (t_infix_5) {
  (s.pc = "c1wgwpPdvoZTHvk9");
  var t_call_6 = (ok1(s, s.$e) && s.$e.opacity(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 + 0.1));
  s.rt.logObjectMutation(s.$e);
  (ok2(s, s.$e, t_infix_7) && s.$e.set_opacity(t_infix_7, s));
  } else {
  (s.pc = "w0wLiH41bJkYPWSV");
  s.rt.logObjectMutation(s.$e);
  (ok1(s, s.$e) && s.$e.set_opacity(0.8, s));
  (s.pc = "xZvOTU9oN243DUCr");
  return s.rt.enter(a_turtletowardsrabbit(s, a_turtleupdate$6, s.$e));
  }
  return a_turtleupdate$5;
  }
  return a_turtleupdate$7;
}
cs.registerStep(a_turtleupdate$3, 'a_turtleupdate$3');

function a_turtleupdate$6(s) {
  var t_actRes_8 = s.rt.returnedFrom.result;
  t_actRes_8;
  return a_turtleupdate$5;
}
cs.registerStep(a_turtleupdate$6, 'a_turtleupdate$6');

function a_turtleupdate$5(s) {
  return a_turtleupdate$7;
}
cs.registerStep(a_turtleupdate$5, 'a_turtleupdate$5');

function a_turtleupdate$7(s) {
  return s.rt.leave();
}
cs.registerStep(a_turtleupdate$7, 'a_turtleupdate$7');

/* ACTION: sound play */
function a_soundplay(previous, returnAddr, $sound) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_soundplay$0;
  s.name = "sound play";
  s.$sound = $sound;
  return s;
}
cs.registerAction("sound play", "soundplay", a_soundplay, true);

function a_soundplay$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "ri84LEJNThG7aUIa");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$sounds")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "GEWAOMIY21nIJbGY");
  s.rt.logObjectMutation(s.$sound);
  (ok1(s, s.$sound) && s.$sound.set_volume(0.5, s));
  (s.pc = "x5DZrjKx0XJAd0dT");
  var t_resumeCtx_2 = s.rt.getBlockingResumeCtx(a_soundplay$4);
  (ok1(s, s.$sound) && s.$sound.play(t_resumeCtx_2));
  return a_soundplay$4;
  } else {
  (s.pc = "w41RiWYbzpgOZCgZ");
  null;
  }
  return a_soundplay$3;
}
cs.registerStep(a_soundplay$0, 'a_soundplay$0');

function a_soundplay$4(s) {
  return a_soundplay$3;
}
cs.registerStep(a_soundplay$4, 'a_soundplay$4');

function a_soundplay$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_soundplay$3, 'a_soundplay$3');

/* ACTION: banner frame rate init */
function a_bannerframerateinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerframerateinit$0;
  s.name = "banner frame rate init";
  s.result = undefined;
  return s;
}
cs.registerAction("banner frame rate init", "bannerframerateinit", a_bannerframerateinit, true);

function a_bannerframerateinit$0(s) {
  (s.pc = "flKKYuIhxiNBPk2N");
  var t_call_0 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.create_text(100, 20, 10, "FPS\u003d", s));
  s.rt.markAllocated(t_call_0);
  (s.result = t_call_0);
  (s.pc = "TohhrTi8rnQqAn3V");
  var t_call_1 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 * 0.95));
  var t_call_3 = (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.height(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 * 0.95));
  s.rt.logObjectMutation(s.result);
  (ok3(s, s.result, t_infix_2, t_infix_4) && s.result.set_pos(t_infix_2, t_infix_4, s));
  var t_elseIf_5 = true;
  (s.pc = "Hhc3v8kBxA2HTdEN");
  if (/* options */ s.d.$options) {
  var t_recOp_6 = /* options */ s.d.$options[("$debug")];
  }
  var t_call_7 = (ok1(s, t_recOp_6) && lib.Boolean_.not(t_recOp_6, s));
  ok1(s, t_call_7);
  if (t_call_7) {
  (s.pc = "Zhgmt5ES1guFx0Vd");
  s.rt.logObjectMutation(s.result);
  (ok1(s, s.result) && s.result.hide(s));
  } else {
  (s.pc = "i1VRHkiH6j4GNHFh");
  null;
  }
  return s.rt.leave();
}
cs.registerStep(a_bannerframerateinit$0, 'a_bannerframerateinit$0');

/* ACTION: gate is active */
function a_gateisactive(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gateisactive$0;
  s.name = "gate is active";
  s.$gate = $gate;
  s.result = undefined;
  s.$gatedec = undefined;
  return s;
}
cs.registerAction("gate is active", "gateisactive", a_gateisactive, true);

function a_gateisactive$0(s) {
  (s.pc = "nxjYuOl0m2g2l86j");
  var t_call_0 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  (s.$gatedec = t_call_0);
  (s.pc = "E7cXC5NEA2eqapnZ");
  if (s.$gatedec) {
  var t_recOp_1 = s.$gatedec.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.Boolean_.not(t_recOp_1, s));
  var t_lazy_3 = t_call_2;
  if ((ok1(s, t_lazy_3) && t_lazy_3)) {
  var t_call_4 = (ok1(s, s.$gate) && s.$gate.color(s));
  var t_call_5 = lib.Colors.red(s);
  var t_call_6 = (ok2(s, t_call_4, t_call_5) && t_call_4.equals(t_call_5, s));
  var t_call_7 = (ok1(s, t_call_6) && lib.Boolean_.not(t_call_6, s));
  (t_lazy_3 = t_call_7);
  }
  var t_lazy_8 = t_lazy_3;
  if ((ok1(s, t_lazy_8) && t_lazy_8)) {
  var t_call_9 = (ok1(s, s.$gate) && s.$gate.width(s));
  var t_infix_10 = (ok1(s, t_call_9) && (t_call_9 === 80));
  (t_lazy_8 = t_infix_10);
  }
  (s.result = t_lazy_8);
  return s.rt.leave();
}
cs.registerStep(a_gateisactive$0, 'a_gateisactive$0');

/* ACTION: gate update */
function a_gateupdate(previous, returnAddr, $gate) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gateupdate$0;
  s.name = "gate update";
  s.$gate = $gate;
  return s;
}
cs.registerAction("gate update", "gateupdate", a_gateupdate, true);

function a_gateupdate$0(s) {
  s.t_elseIf_0 = true;
  (s.pc = "dgBn5BqxLSg6oSsR");
  var t_call_1 = (ok1(s, s.$gate) && s.$gate.width(s));
  var t_infix_2 = (ok1(s, t_call_1) && (t_call_1 < 80));
  ok1(s, t_infix_2);
  if (t_infix_2) {
  (s.t_elseIf_0 = false);
  (s.pc = "YY4PWqB1j3klpG2k");
  var t_call_3 = (ok1(s, s.$gate) && s.$gate.width(s));
  var t_infix_4 = (ok1(s, t_call_3) && (t_call_3 + 10));
  s.rt.logObjectMutation(s.$gate);
  (ok2(s, s.$gate, t_infix_4) && s.$gate.set_width(t_infix_4, s));
  var t_elseIf_5 = true;
  (s.pc = "Sr7R3OfwoBr3CUM2");
  var t_call_6 = (ok1(s, s.$gate) && s.$gate.width(s));
  var t_infix_7 = (ok1(s, t_call_6) && (t_call_6 < 80));
  var t_call_8 = (ok1(s, t_infix_7) && lib.Boolean_.not(t_infix_7, s));
  ok1(s, t_call_8);
  if (t_call_8) {
  (s.pc = "e2kdDIt8lBjEb1EA");
  s.rt.logObjectMutation(s.$gate);
  (ok1(s, s.$gate) && s.$gate.set_opacity(0.8, s));
  } else {
  (s.pc = "FIzSfsloGKi7jWF9");
  null;
  }
  }
  if (s.t_elseIf_0) {
  (s.pc = "E3i3aPbszGabktDu");
  var t_call_9 = (ok1(s, s.$gate) && s.$gate.color(s));
  var t_call_10 = lib.Colors.red(s);
  var t_call_11 = (ok2(s, t_call_9, t_call_10) && t_call_9.equals(t_call_10, s));
  ok1(s, t_call_11);
  if (t_call_11) {
  (s.t_elseIf_0 = false);
  var t_elseIf_12 = true;
  (s.pc = "kH3Zemv61uSPjg6M");
  var t_call_13 = (ok1(s, s.$gate) && s.$gate.opacity(s));
  var t_infix_14 = (ok1(s, t_call_13) && (t_call_13 > 0.4));
  ok1(s, t_infix_14);
  if (t_infix_14) {
  (s.pc = "GrUxUvlJgnROpSd2");
  var t_call_15 = (ok1(s, s.$gate) && s.$gate.opacity(s));
  var t_infix_16 = (ok1(s, t_call_15) && (t_call_15 - 0.1));
  s.rt.logObjectMutation(s.$gate);
  (ok2(s, s.$gate, t_infix_16) && s.$gate.set_opacity(t_infix_16, s));
  } else {
  (s.pc = "p06k46u0V4VLTYnm");
  return s.rt.enter(a_gatefree(s, a_gateupdate$6, s.$gate));
  }
  return a_gateupdate$5;
  }
  return a_gateupdate$4;
  }
  return a_gateupdate$7;
}
cs.registerStep(a_gateupdate$0, 'a_gateupdate$0');

function a_gateupdate$6(s) {
  var t_actRes_17 = s.rt.returnedFrom.result;
  t_actRes_17;
  return a_gateupdate$5;
}
cs.registerStep(a_gateupdate$6, 'a_gateupdate$6');

function a_gateupdate$5(s) {
  return a_gateupdate$4;
}
cs.registerStep(a_gateupdate$5, 'a_gateupdate$5');

function a_gateupdate$4(s) {
  return a_gateupdate$7;
}
cs.registerStep(a_gateupdate$4, 'a_gateupdate$4');

function a_gateupdate$7(s) {
  if (s.t_elseIf_0) {
  (s.pc = "PmXyKvmeoOe4waRU");
  var t_call_18 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$gate) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$gate, s));
  if (t_call_18) {
  var t_recOp_19 = t_call_18.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  ok1(s, t_recOp_19);
  if (t_recOp_19) {
  (s.t_elseIf_0 = false);
  (s.pc = "Nfi7Oa4LPlmOaEJW");
  return s.rt.enter(a_gateexplode(s, a_gateupdate$10, s.$gate));
  }
  return a_gateupdate$9;
  }
  return a_gateupdate$11;
}
cs.registerStep(a_gateupdate$7, 'a_gateupdate$7');

function a_gateupdate$10(s) {
  var t_actRes_20 = s.rt.returnedFrom.result;
  t_actRes_20;
  return a_gateupdate$9;
}
cs.registerStep(a_gateupdate$10, 'a_gateupdate$10');

function a_gateupdate$9(s) {
  return a_gateupdate$11;
}
cs.registerStep(a_gateupdate$9, 'a_gateupdate$9');

function a_gateupdate$11(s) {
  if (s.t_elseIf_0) {
  (s.pc = "Kb4Fk3ZOPIPPjHKq");
  var t_call_21 = lib.Math_.random(100, s);
  var t_infix_22 = (ok1(s, t_call_21) && (t_call_21 < 20));
  ok1(s, t_infix_22);
  if (t_infix_22) {
  (s.pc = "pSSAURbCb2L2I4Lb");
  return s.rt.enter(a_gatebarupdate(s, a_gateupdate$13, s.$gate));
  }
  return a_gateupdate$12;
  }
  return a_gateupdate$14;
}
cs.registerStep(a_gateupdate$11, 'a_gateupdate$11');

function a_gateupdate$13(s) {
  var t_actRes_23 = s.rt.returnedFrom.result;
  t_actRes_23;
  return a_gateupdate$12;
}
cs.registerStep(a_gateupdate$13, 'a_gateupdate$13');

function a_gateupdate$12(s) {
  return a_gateupdate$14;
}
cs.registerStep(a_gateupdate$12, 'a_gateupdate$12');

function a_gateupdate$14(s) {
  return s.rt.leave();
}
cs.registerStep(a_gateupdate$14, 'a_gateupdate$14');

/* ACTION: turtle is active */
function a_turtleisactive(previous, returnAddr, $turtle) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_turtleisactive$0;
  s.name = "turtle is active";
  s.$turtle = $turtle;
  s.result = undefined;
  return s;
}
cs.registerAction("turtle is active", "turtleisactive", a_turtleisactive, true);

function a_turtleisactive$0(s) {
  (s.pc = "xvVb1U0k3UOFuoyd");
  var t_call_0 = (ok1(s, s.$turtle) && s.$turtle.opacity(s));
  var t_infix_1 = (ok1(s, t_call_0) && (t_call_0 === 0.8));
  var t_lazy_2 = t_infix_1;
  if ((ok1(s, t_lazy_2) && t_lazy_2)) {
  var t_call_3 = (ok2(s, /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa, s.$turtle) && /* Sprite decorator */ s.d.$BU3ByaXRlIGRlY29yYXRvcgaa.at(s.$turtle, s));
  if (t_call_3) {
  var t_recOp_4 = t_call_3.perform_get("ihmdFpqLyY4EhWsv", s);
  }
  var t_call_5 = (ok1(s, t_recOp_4) && lib.Boolean_.not(t_recOp_4, s));
  (t_lazy_2 = t_call_5);
  }
  (s.result = t_lazy_2);
  return s.rt.leave();
}
cs.registerStep(a_turtleisactive$0, 'a_turtleisactive$0');

/* ACTION: shell update */
function a_shellupdate(previous, returnAddr, $shell) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_shellupdate$0;
  s.name = "shell update";
  s.$shell = $shell;
  return s;
}
cs.registerAction("shell update", "shellupdate", a_shellupdate, true);

function a_shellupdate$0(s) {
  s.t_elseIf_0 = true;
  (s.pc = "jrTjyryyOV41pP9G");
  var t_call_1 = (ok1(s, s.$shell) && s.$shell.color(s));
  var t_call_2 = lib.Colors.magenta(s);
  var t_call_3 = (ok2(s, t_call_1, t_call_2) && t_call_1.equals(t_call_2, s));
  ok1(s, t_call_3);
  if (t_call_3) {
  (s.t_elseIf_0 = false);
  var t_elseIf_4 = true;
  (s.pc = "MmURTj2pyaGAZhZx");
  if (/* banner */ s.d.$banner) {
  var t_recOp_5 = /* banner */ s.d.$banner[("$multiplier")];
  }
  var t_call_6 = (ok2(s, s.$shell, t_recOp_5) && s.$shell.overlaps_with(t_recOp_5, s));
  ok1(s, t_call_6);
  if (t_call_6) {
  (s.pc = "VE529HBkXPowpETs");
  return s.rt.enter(a_bannermultiplierincr(s, a_shellupdate$5, 2));
  } else {
  (s.pc = "xmv4NamTxGO9JxXC");
  if (/* banner */ s.d.$banner) {
  var t_recOp_9 = /* banner */ s.d.$banner[("$multiplier")];
  }
  s.rt.logObjectMutation(s.$shell);
  (ok2(s, s.$shell, t_recOp_9) && s.$shell.move_towards(t_recOp_9, 0.3, s));
  }
  return a_shellupdate$4;
  }
  return a_shellupdate$2;
}
cs.registerStep(a_shellupdate$0, 'a_shellupdate$0');

function a_shellupdate$5(s) {
  var t_actRes_7 = s.rt.returnedFrom.result;
  t_actRes_7;
  (s.pc = "y9i2rfRRjCIRcaYa");
  s.rt.logObjectMutation(/* shells */ s.d.$shells);
  var t_call_8 = (ok2(s, /* shells */ s.d.$shells, s.$shell) && /* shells */ s.d.$shells.remove(s.$shell, s));
  t_call_8;
  (s.pc = "LYWf6z4JAOmxjR5U");
  s.rt.logObjectMutation(s.$shell);
  (ok1(s, s.$shell) && s.$shell.delete_(s));
  return a_shellupdate$4;
}
cs.registerStep(a_shellupdate$5, 'a_shellupdate$5');

function a_shellupdate$4(s) {
  return a_shellupdate$2;
}
cs.registerStep(a_shellupdate$4, 'a_shellupdate$4');

function a_shellupdate$2(s) {
  if (s.t_elseIf_0) {
  (s.pc = "zNdALyp6TeMxSWnx");
  var t_call_10 = (ok1(s, s.$shell) && s.$shell.opacity(s));
  var t_infix_11 = (ok1(s, t_call_10) && (t_call_10 > 0.2));
  ok1(s, t_infix_11);
  if (t_infix_11) {
  (s.pc = "U7fgdHjK5H1NzwRt");
  var t_call_12 = (ok1(s, s.$shell) && s.$shell.opacity(s));
  var t_infix_13 = (ok1(s, t_call_12) && (t_call_12 - 0.06));
  s.rt.logObjectMutation(s.$shell);
  (ok2(s, s.$shell, t_infix_13) && s.$shell.set_opacity(t_infix_13, s));
  } else {
  (s.pc = "vG4twMjOZ3vJh67v");
  s.rt.logObjectMutation(/* shells */ s.d.$shells);
  var t_call_14 = (ok2(s, /* shells */ s.d.$shells, s.$shell) && /* shells */ s.d.$shells.remove(s.$shell, s));
  t_call_14;
  (s.pc = "rp3406aqVwmdhTcC");
  s.rt.logObjectMutation(s.$shell);
  (ok1(s, s.$shell) && s.$shell.delete_(s));
  }
  }
  return s.rt.leave();
}
cs.registerStep(a_shellupdate$2, 'a_shellupdate$2');


//Ent_BYmFubmVyIHR5cGUa
function Ent_BYmFubmVyIHR5cGUa(p) {
  this.parent = p;
}
Ent_BYmFubmVyIHR5cGUa.prototype = new lib.ObjectEntry();
Ent_BYmFubmVyIHR5cGUa.prototype.keys = [];
Ent_BYmFubmVyIHR5cGUa.prototype.values = ["$score", "$high score", "$multiplier", "$health", "$frame rate"];
Ent_BYmFubmVyIHR5cGUa.prototype.fields = ["$score", "$high score", "$multiplier", "$health", "$frame rate"];
Ent_BYmFubmVyIHR5cGUa.prototype["$score_realname"] = "score";
Ent_BYmFubmVyIHR5cGUa.prototype["$high score_realname"] = "high score";
Ent_BYmFubmVyIHR5cGUa.prototype["$multiplier_realname"] = "multiplier";
Ent_BYmFubmVyIHR5cGUa.prototype["$health_realname"] = "health";
Ent_BYmFubmVyIHR5cGUa.prototype["$frame rate_realname"] = "frame rate";
//Tbl_BYmFubmVyIHR5cGUa
function Tbl_BYmFubmVyIHR5cGUa(l) {
  this.libName = l;
  this.initParent();
}
Tbl_BYmFubmVyIHR5cGUa.prototype = new lib.ObjectSingleton();
Tbl_BYmFubmVyIHR5cGUa.prototype.entryCtor = Ent_BYmFubmVyIHR5cGUa;
cs.objectSingletons["banner type"] = function(d) { return d.$BYmFubmVyIHR5cGUa };
Tbl_BYmFubmVyIHR5cGUa.prototype.selfCtor = Tbl_BYmFubmVyIHR5cGUa;
Tbl_BYmFubmVyIHR5cGUa.prototype.stableName = "BYmFubmVyIHR5cGUa";
Tbl_BYmFubmVyIHR5cGUa.prototype.entryKindName = "banner type";

// jsonimport
Ent_BYmFubmVyIHR5cGUa.prototype.importJsonFields = function (ctx, json) {
  var s = ctx.s;
}
cs.registerGlobal("$BYmFubmVyIHR5cGUa");
/* ACTION: banner init */
function a_bannerinit(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_bannerinit$0;
  s.name = "banner init";
  s.$score = undefined;
  s.$high_score = undefined;
  return s;
}
cs.registerAction("banner init", "bannerinit", a_bannerinit, true);

function a_bannerinit$0(s) {
  (s.pc = "hETplGamRzqMyfzl");
  var t_call_0 = (ok1(s, /* banner type */ s.d.$BYmFubmVyIHR5cGUa) && /* banner type */ s.d.$BYmFubmVyIHR5cGUa.create(s));
  s.rt.markAllocated(t_call_0);
  (/* banner */ s.d.$banner = t_call_0);
  s.rt.logDataWrite();
  (s.pc = "Mc4nVsJEiyR57Uzo");
  return s.rt.enter(a_bannerscoreinit(s, a_bannerinit$2));
}
cs.registerStep(a_bannerinit$0, 'a_bannerinit$0');

function a_bannerinit$2(s) {
  var t_actRes_1 = s.rt.returnedFrom.result;
  (s.$score = s.rt.returnedFrom.results[0]);
  (s.$high_score = s.rt.returnedFrom.results[1]);
  (s.pc = "CezRwTrMUkraUASu");
  if (/* banner */ s.d.$banner) {
  /* banner */ s.d.$banner.perform_set("$score", s.$score, s);
  }
  (s.pc = "R82yzh5q91ueqzFn");
  if (/* banner */ s.d.$banner) {
  /* banner */ s.d.$banner.perform_set("$high score", s.$high_score, s);
  }
  (s.pc = "GxC94xY93QIDa3Hl");
  return s.rt.enter(a_bannermultiplierinit(s, a_bannerinit$5));
}
cs.registerStep(a_bannerinit$2, 'a_bannerinit$2');

function a_bannerinit$5(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  if (/* banner */ s.d.$banner) {
  /* banner */ s.d.$banner.perform_set("$multiplier", t_actRes_2, s);
  }
  (s.pc = "fLll24EMmY73gsM0");
  return s.rt.enter(a_bannerhealthinit(s, a_bannerinit$7));
}
cs.registerStep(a_bannerinit$5, 'a_bannerinit$5');

function a_bannerinit$7(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  if (/* banner */ s.d.$banner) {
  /* banner */ s.d.$banner.perform_set("$health", t_actRes_3, s);
  }
  (s.pc = "xRWj6EkcvA7CSJZz");
  return s.rt.enter(a_bannerframerateinit(s, a_bannerinit$9));
}
cs.registerStep(a_bannerinit$7, 'a_bannerinit$7');

function a_bannerinit$9(s) {
  var t_actRes_4 = s.rt.returnedFrom.result;
  if (/* banner */ s.d.$banner) {
  /* banner */ s.d.$banner.perform_set("$frame rate", t_actRes_4, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_bannerinit$9, 'a_bannerinit$9');

/* ACTION: main */
function a_main(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_main$0;
  s.name = "main";
  return s;
}
cs.registerAction("main", "main", a_main, true);

function a_main$0(s) {
  (s.pc = "UFJqIEmYPl604idD");
  return s.rt.enter(a_optionsinit(s, a_main$2));
}
cs.registerStep(a_main$0, 'a_main$0');

function a_main$2(s) {
  var t_actRes_0 = s.rt.returnedFrom.result;
  t_actRes_0;
  (s.pc = "gT1nYYgYMKASET3Y");
  var t_call_1 = lib.Colors.black(s);
  (ok1(s, t_call_1) && lib.Wall.set_background(t_call_1, s));
  (s.pc = "xNoBXeL4DjE1xadY");
  return s.rt.enter(a_splashscreen(s, a_main$3));
}
cs.registerStep(a_main$2, 'a_main$2');

function a_main$3(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  (/* splash */ s.d.$splash = t_actRes_2);
  s.rt.logDataWrite();
  (s.pc = "vcEX3MNEmSyKqUi1");
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.post_to_wall(s));
  (s.pc = "yqBMWgl0KrhkRnuA");
  return s.rt.enter(a_gamemetricsinit(s, a_main$4));
}
cs.registerStep(a_main$3, 'a_main$3');

function a_main$4(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  (s.pc = "QHzT9MZOY43Mf5Zr");
  if (/* metrics */ s.d.$metrics) {
  /* metrics */ s.d.$metrics.perform_set("$game on", false, s);
  }
  return s.rt.leave();
}
cs.registerStep(a_main$4, 'a_main$4');

/* ACTION: gameloop */
function a_gameloop(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_gameloop$0;
  s.name = "gameloop";
  s.$curr_time = undefined;
  s.$sleep_time = undefined;
  return s;
}
cs.registerAction("gameloop", "gameloop", a_gameloop, true);
cs.registerEventHandler("gameloop", null, a_gameloop);

function a_gameloop$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "m2s9obcGf4ODoJw3");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$game on")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "mHSd2UfuxLnUI9du");
  var t_call_2 = lib.Time.now(s);
  (s.$curr_time = t_call_2);
  var t_elseIf_3 = true;
  (s.pc = "lSxBBiPJgwaAHuaA");
  var t_val_4 = s.d.$$localpersistentvars.perform_get("$nexttime", s);
  var t_call_5 = (ok2(s, s.$curr_time, t_val_4) && s.$curr_time.subtract(t_val_4, s));
  var t_infix_6 = (ok1(s, t_call_5) && (t_call_5 > 0));
  ok1(s, t_infix_6);
  if (t_infix_6) {
  (s.pc = "rKHbFUOCjOQ8JRpX");
  var t_val_7 = s.d.$$localpersistentvars.perform_get("$nexttime", s);
  var t_infix_8 = (1 / 24);
  var t_infix_9 = (ok1(s, t_infix_8) && (t_infix_8 * 1000));
  var t_call_10 = (ok2(s, t_val_7, t_infix_9) && t_val_7.add_milliseconds(t_infix_9, s));
  s.d.$$localpersistentvars.perform_set("$nexttime", t_call_10, s);
  s.rt.logDataWrite();
  (s.pc = "MqyHbkpXjfO2tw60");
  return s.rt.enter(a_gameupdateall(s, a_gameloop$5));
  } else {
  (s.pc = "F7SJBN5XMupbPORb");
  var t_val_13 = s.d.$$localpersistentvars.perform_get("$nexttime", s);
  var t_call_14 = (ok2(s, t_val_13, s.$curr_time) && t_val_13.subtract(s.$curr_time, s));
  (s.$sleep_time = t_call_14);
  var t_elseIf_15 = true;
  (s.pc = "gEC2Zj5fQLffSYxh");
  var t_infix_16 = (ok1(s, s.$sleep_time) && (s.$sleep_time > 0));
  ok1(s, t_infix_16);
  if (t_infix_16) {
  (s.pc = "dzjL7uyEAb893AMU");
  var t_resumeCtx_17 = s.rt.getAwaitResumeCtx(a_gameloop$8);
  (ok1(s, s.$sleep_time) && lib.Time.sleep(s.$sleep_time, t_resumeCtx_17));
  return a_gameloop$8;
  } else {
  (s.pc = "jQ4iCCeI2qHEPDa1");
  null;
  }
  return a_gameloop$7;
  }
  return a_gameloop$4;
  } else {
  (s.pc = "NGem2wCXKzltOmwb");
  s.rt.logObjectMutation(/* splash */ s.d.$splash);
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.evolve(s));
  (s.pc = "uRFRJkkMr7II95FW");
  s.rt.logObjectMutation(/* splash */ s.d.$splash);
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.update_on_wall(s));
  }
  return a_gameloop$3;
}
cs.registerStep(a_gameloop$0, 'a_gameloop$0');

function a_gameloop$5(s) {
  var t_actRes_11 = s.rt.returnedFrom.result;
  t_actRes_11;
  (s.pc = "DF9Fk3qu6K33MC77");
  s.rt.logObjectMutation(/* board */ s.d.$board);
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.evolve(s));
  (s.pc = "jfBhXOkN4b44gzjX");
  return s.rt.enter(a_gamepostprocess(s, a_gameloop$6));
}
cs.registerStep(a_gameloop$5, 'a_gameloop$5');

function a_gameloop$8(s) {
  return a_gameloop$7;
}
cs.registerStep(a_gameloop$8, 'a_gameloop$8');

function a_gameloop$7(s) {
  return a_gameloop$4;
}
cs.registerStep(a_gameloop$7, 'a_gameloop$7');

function a_gameloop$4(s) {
  return a_gameloop$3;
}
cs.registerStep(a_gameloop$4, 'a_gameloop$4');

function a_gameloop$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_gameloop$3, 'a_gameloop$3');

function a_gameloop$6(s) {
  var t_actRes_12 = s.rt.returnedFrom.result;
  t_actRes_12;
  (s.pc = "NBg9o4kJ4ZK5G8Kx");
  s.rt.logObjectMutation(/* board */ s.d.$board);
  (ok1(s, /* board */ s.d.$board) && /* board */ s.d.$board.update_on_wall(s));
  return a_gameloop$4;
}
cs.registerStep(a_gameloop$6, 'a_gameloop$6');

cs.registerGlobal("$nexttime");
/* ACTION: tap sprite: splash carrot */
function a_tapsprite3asplashcar(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tapsprite3asplashcar$0;
  s.name = "tap sprite\u003a splash carrot";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  return s;
}
cs.registerAction("tap sprite\u003a splash carrot", "tapsprite3asplashcar", a_tapsprite3asplashcar, true);
cs.registerEventHandler("tap sprite\u003a ", "$splashcarrot", a_tapsprite3asplashcar);

function a_tapsprite3asplashcar$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xEyeI7XJ7awB9ud2");
  if (/* metrics */ s.d.$metrics) {
  var t_recOp_1 = /* metrics */ s.d.$metrics[("$game on")];
  }
  var t_call_2 = (ok1(s, t_recOp_1) && lib.Boolean_.not(t_recOp_1, s));
  ok1(s, t_call_2);
  if (t_call_2) {
  (s.pc = "Q1aF3g46xQIpkBBV");
  return s.rt.enter(a_gamebegin(s, a_tapsprite3asplashcar$4));
  } else {
  (s.pc = "atq3ObNE4RIZqMEl");
  null;
  }
  return a_tapsprite3asplashcar$3;
}
cs.registerStep(a_tapsprite3asplashcar$0, 'a_tapsprite3asplashcar$0');

function a_tapsprite3asplashcar$4(s) {
  var t_actRes_3 = s.rt.returnedFrom.result;
  t_actRes_3;
  return a_tapsprite3asplashcar$3;
}
cs.registerStep(a_tapsprite3asplashcar$4, 'a_tapsprite3asplashcar$4');

function a_tapsprite3asplashcar$3(s) {
  return s.rt.leave();
}
cs.registerStep(a_tapsprite3asplashcar$3, 'a_tapsprite3asplashcar$3');

/* ACTION: tap sprite: splash art */
function a_tapsprite3asplashart(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tapsprite3asplashart$0;
  s.name = "tap sprite\u003a splash art";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  return s;
}
cs.registerAction("tap sprite\u003a splash art", "tapsprite3asplashart", a_tapsprite3asplashart, true);
cs.registerEventHandler("tap sprite\u003a ", "$splashart", a_tapsprite3asplashart);

function a_tapsprite3asplashart$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "CcckQiozT8V3EaHG");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "CbLvGwwv4lGRSpUP");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$artwork", false, s);
  }
  } else {
  (s.pc = "R74nazWuBmMEdrcQ");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$artwork", true, s);
  }
  }
  (s.pc = "ZnJIXf2NzVWV93eU");
  return s.rt.enter(a_splashoptionsshow(s, a_tapsprite3asplashart$6));
}
cs.registerStep(a_tapsprite3asplashart$0, 'a_tapsprite3asplashart$0');

function a_tapsprite3asplashart$6(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "x93faAjuORwATQLe");
  s.rt.logObjectMutation(/* splash */ s.d.$splash);
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_tapsprite3asplashart$6, 'a_tapsprite3asplashart$6');

/* ACTION: tap sprite: splash sound */
function a_tapsprite3asplashsou(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tapsprite3asplashsou$0;
  s.name = "tap sprite\u003a splash sound";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  return s;
}
cs.registerAction("tap sprite\u003a splash sound", "tapsprite3asplashsou", a_tapsprite3asplashsou, true);
cs.registerEventHandler("tap sprite\u003a ", "$splashsound", a_tapsprite3asplashsou);

function a_tapsprite3asplashsou$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "gyKK01GblOkD3j1Y");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$sounds")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "Gh5j222OkDibuyeR");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$sounds", false, s);
  }
  } else {
  (s.pc = "bKrT1Z3JEFwORjVi");
  if (/* options */ s.d.$options) {
  /* options */ s.d.$options.perform_set("$sounds", true, s);
  }
  }
  (s.pc = "j4ph436cGkndLMQL");
  return s.rt.enter(a_splashoptionsshow(s, a_tapsprite3asplashsou$6));
}
cs.registerStep(a_tapsprite3asplashsou$0, 'a_tapsprite3asplashsou$0');

function a_tapsprite3asplashsou$6(s) {
  var t_actRes_2 = s.rt.returnedFrom.result;
  t_actRes_2;
  (s.pc = "mVe1NEzaUHyuosd6");
  s.rt.logObjectMutation(/* splash */ s.d.$splash);
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_tapsprite3asplashsou$6, 'a_tapsprite3asplashsou$6');

/* ACTION: tap sprite: splash instructions */
function a_tapsprite3asplashins(previous, returnAddr, $sprite, $x, $y) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_tapsprite3asplashins$0;
  s.name = "tap sprite\u003a splash instructions";
  s.$sprite = $sprite;
  s.$x = $x;
  s.$y = $y;
  return s;
}
cs.registerAction("tap sprite\u003a splash instructions", "tapsprite3asplashins", a_tapsprite3asplashins, true);
cs.registerEventHandler("tap sprite\u003a ", "$splashinstructions", a_tapsprite3asplashins);

function a_tapsprite3asplashins$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "xYHT9mpiZhVgZN9Z");
  var t_call_1 = (ok1(s, /* splash inst pic */ s.d.$splashinstpic) && /* splash inst pic */ s.d.$splashinstpic.is_visible(s));
  ok1(s, t_call_1);
  if (t_call_1) {
  (s.pc = "m8yMcc5aJT8IaBvg");
  s.rt.logObjectMutation(/* splash instructions */ s.d.$splashinstructions);
  (ok1(s, /* splash instructions */ s.d.$splashinstructions) && /* splash instructions */ s.d.$splashinstructions.set_text("Show Instructions", s));
  (s.pc = "JPAwNMpOQGP5ybIM");
  s.rt.logObjectMutation(/* splash inst pic */ s.d.$splashinstpic);
  (ok1(s, /* splash inst pic */ s.d.$splashinstpic) && /* splash inst pic */ s.d.$splashinstpic.hide(s));
  } else {
  (s.pc = "vGIHCUHGRblp2jan");
  s.rt.logObjectMutation(/* splash instructions */ s.d.$splashinstructions);
  (ok1(s, /* splash instructions */ s.d.$splashinstructions) && /* splash instructions */ s.d.$splashinstructions.set_text("Hide Instructions", s));
  (s.pc = "Y5B7I02mfxWq1aXh");
  s.rt.logObjectMutation(/* splash inst pic */ s.d.$splashinstpic);
  (ok1(s, /* splash inst pic */ s.d.$splashinstpic) && /* splash inst pic */ s.d.$splashinstpic.show(s));
  }
  (s.pc = "M0TOOPduRQpZ21cY");
  s.rt.logObjectMutation(/* splash */ s.d.$splash);
  (ok1(s, /* splash */ s.d.$splash) && /* splash */ s.d.$splash.update_on_wall(s));
  return s.rt.leave();
}
cs.registerStep(a_tapsprite3asplashins$0, 'a_tapsprite3asplashins$0');

/* ACTION: splash options show */
function a_splashoptionsshow(previous, returnAddr) {
  var s = TDev.Runtime.mkStackFrame(previous, returnAddr);
  s.entryAddr = a_splashoptionsshow$0;
  s.name = "splash options show";
  return s;
}
cs.registerAction("splash options show", "splashoptionsshow", a_splashoptionsshow, true);

function a_splashoptionsshow$0(s) {
  var t_elseIf_0 = true;
  (s.pc = "uPma4Cl4MfAlXTa6");
  if (/* options */ s.d.$options) {
  var t_recOp_1 = /* options */ s.d.$options[("$sounds")];
  }
  ok1(s, t_recOp_1);
  if (t_recOp_1) {
  (s.pc = "IHMR3nlC59pTyBBi");
  s.rt.logObjectMutation(/* splash sound */ s.d.$splashsound);
  (ok1(s, /* splash sound */ s.d.$splashsound) && /* splash sound */ s.d.$splashsound.set_text("Sounds on", s));
  (s.pc = "bM3ghGuJPX3XCM7a");
  var t_call_2 = lib.Colors.white(s);
  s.rt.logObjectMutation(/* splash sound */ s.d.$splashsound);
  (ok2(s, /* splash sound */ s.d.$splashsound, t_call_2) && /* splash sound */ s.d.$splashsound.set_color(t_call_2, s));
  } else {
  (s.pc = "UJhYOyQ6FFApzXqu");
  s.rt.logObjectMutation(/* splash sound */ s.d.$splashsound);
  (ok1(s, /* splash sound */ s.d.$splashsound) && /* splash sound */ s.d.$splashsound.set_text("Sounds off", s));
  (s.pc = "exyl17tgq3KK62xy");
  var t_call_3 = lib.Colors.gray(s);
  s.rt.logObjectMutation(/* splash sound */ s.d.$splashsound);
  (ok2(s, /* splash sound */ s.d.$splashsound, t_call_3) && /* splash sound */ s.d.$splashsound.set_color(t_call_3, s));
  }
  var t_elseIf_4 = true;
  (s.pc = "x9PtzHD4FhejgV50");
  if (/* options */ s.d.$options) {
  var t_recOp_5 = /* options */ s.d.$options[("$artwork")];
  }
  ok1(s, t_recOp_5);
  if (t_recOp_5) {
  (s.pc = "xNLS0tmr2y4p8lEc");
  s.rt.logObjectMutation(/* splash art */ s.d.$splashart);
  (ok1(s, /* splash art */ s.d.$splashart) && /* splash art */ s.d.$splashart.set_text("Artwork on", s));
  (s.pc = "XAZDw5vX3LX6eINR");
  var t_call_6 = lib.Colors.white(s);
  s.rt.logObjectMutation(/* splash art */ s.d.$splashart);
  (ok2(s, /* splash art */ s.d.$splashart, t_call_6) && /* splash art */ s.d.$splashart.set_color(t_call_6, s));
  } else {
  (s.pc = "xm28eEPSRpxeDRHR");
  s.rt.logObjectMutation(/* splash art */ s.d.$splashart);
  (ok1(s, /* splash art */ s.d.$splashart) && /* splash art */ s.d.$splashart.set_text("Artwork off", s));
  (s.pc = "V2zXu2xPQA2hwN0p");
  var t_call_7 = lib.Colors.gray(s);
  s.rt.logObjectMutation(/* splash art */ s.d.$splashart);
  (ok2(s, /* splash art */ s.d.$splashart, t_call_7) && /* splash art */ s.d.$splashart.set_color(t_call_7, s));
  }
  return s.rt.leave();
}
cs.registerStep(a_splashoptionsshow$0, 'a_splashoptionsshow$0');

cs.registerArtResource("Picture", "$instructions", ".\u002fart\u002fl0_instructions");
(function () {
  var lib, bnd, resolve;
  var bnds = cs.libBindings = {};
  lib = libs["this"] = {};
  bnd = bnds["this"] = libs;
  bnd.mkLambdaProxy = cs.mkLambdaProxy(bnd, "this");
  bnd.scriptName = "Wabbit Wars \u0028leasc\u0029";
  bnd.scriptId = "leasc";
  bnd.topScriptId = "leasc";
    lib["main"] = cs.mkLibProxyFactory(bnd, "this", "main");
    lib["gameloop"] = cs.mkLibProxyFactory(bnd, "this", "gameloop");
    lib["tap sprite\u003a splash carrot"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a splash carrot");
    lib["tap sprite\u003a splash art"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a splash art");
    lib["tap sprite\u003a splash sound"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a splash sound");
    lib["tap sprite\u003a splash instructions"] = cs.mkLibProxyFactory(bnd, "this", "tap sprite\u003a splash instructions");
}());
cs.startFn = function(rt) {
lib.App.rt_start(rt);
lib.Player.rt_start(rt);
lib.Senses.rt_start(rt);
lib.Time.rt_start(rt);
lib.Web.rt_start(rt);
};

cs.stopFn = function(rt) {
lib.App.rt_stop(rt);
lib.Player.rt_stop(rt);
lib.Senses.rt_stop(rt);
lib.Time.rt_stop(rt);
lib.Web.rt_stop(rt);
};

cs._compilerVersion = '1';
cs._initGlobals = function(d,rt) {
  if(!d.hasOwnProperty("$BU3ByaXRlIGRlY29yYXRvcgaa") || !d["$BU3ByaXRlIGRlY29yYXRvcgaa"]) d.$BU3ByaXRlIGRlY29yYXRvcgaa = new Tbl_BU3ByaXRlIGRlY29yYXRvcgaa(d.libName);
  if(!d.hasOwnProperty("$BbWV0cmljcwaa") || !d["$BbWV0cmljcwaa"]) d.$BbWV0cmljcwaa = new Tbl_BbWV0cmljcwaa(d.libName);
  if(!d.hasOwnProperty("$Bb3B0aW9ucwaa") || !d["$Bb3B0aW9ucwaa"]) d.$Bb3B0aW9ucwaa = new Tbl_Bb3B0aW9ucwaa(d.libName);
  if(!d.hasOwnProperty("$BYmFubmVyIHR5cGUa") || !d["$BYmFubmVyIHR5cGUa"]) d.$BYmFubmVyIHR5cGUa = new Tbl_BYmFubmVyIHR5cGUa(d.libName);
  if(!d.hasOwnProperty("$nexttime")) d.$nexttime = lib.DateTime.defaultValue;

  d.$$localpersistentvars = new lib.PersistentVars(rt);
  d.$$localpersistentvars.localsession = true;
  d.$$localpersistentvars.libName = d.libName;
  d.$$localpersistentvars.names = ["$nexttime"]; 
  d.$$localpersistentvars.cloudtypes = ["nexttime\u002cdatetime\u005bglobal\u005b\u005d\u005d"]; 
};

cs._initGlobals2 = function(d) {
d.$BU3ByaXRlIGRlY29yYXRvcgaa.name = "thing";d.$BbWV0cmljcwaa.name = "metrics type";d.$Bb3B0aW9ucwaa.name = "options type";d.$BYmFubmVyIHR5cGUa.name = "banner type";};

cs._resetGlobals = function(d) {
  d.$board = undefined;
  d.$rabbit = undefined;
  d.$gates = undefined;
  d.$shells = undefined;
  d.$BU3ByaXRlIGRlY29yYXRvcgaa = undefined;
  d.$wabbit = undefined;
  d.$turtles = undefined;
  d.$wurtle = undefined;
  d.$rabbitmoveto = undefined;
  d.$BbWV0cmljcwaa = undefined;
  d.$metrics = undefined;
  d.$redturtle = undefined;
  d.$carrot = undefined;
  d.$powerup = undefined;
  d.$tinywabbit = undefined;
  d.$tinywurtle = undefined;
  d.$tinycarrot = undefined;
  d.$throughgate = undefined;
  d.$gotshell = undefined;
  d.$healthdown = undefined;
  d.$turtleSquish = undefined;
  d.$gong = undefined;
  d.$enemyentry = undefined;
  d.$gotcarrot = undefined;
  d.$carrotenter = undefined;
  d.$bombs = undefined;
  d.$title = undefined;
  d.$Bb3B0aW9ucwaa = undefined;
  d.$options = undefined;
  d.$BYmFubmVyIHR5cGUa = undefined;
  d.$banner = undefined;
  d.$splash = undefined;
  d.$splashcarrot = undefined;
  d.$splashart = undefined;
  d.$splashsound = undefined;
  d.$rabbitinvisiblelarge = undefined;
  d.$splashinstructions = undefined;
  d.$splashinstpic = undefined;
  d.$instructions = undefined;
  d.$$localpersistentvars = undefined;
};

cs._importJson = function(d,ctx,json) {
};

cs._exportJson = function(d,ctx) {
  var json = {};
  return json;
};

cs.mainActionName = "main";
cs.authorId = "unknown";
cs.scriptId = "leasc";
cs.scriptGuid = "d5f7e486-1319-4a63-1b19-81cf861845bf";
cs.hasLocalData = 1;
})}
