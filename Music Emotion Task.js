/*************************** 
 * Music Emotion Task *
 ***************************/

import { core, data, sound, util, visual, hardware } from 'https://lib.pavlovia.org/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

function saveData(data){
    fetch("https://script.google.com/macros/s/AKfycbzmHlcL0nHAfxIi99oo_D9_hHvyBavSwkRtppk8vq6Dj9OAqhFoCYqx1_qKgNTDjlNy/exec", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(response => {
        console.log("Data saved!");
    }).catch(error => {
        console.error("Error:", error);
    });
}


// store info about the experiment session:
let expName = 'Music Emotion Task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Please share this experiment with your friends if you found this interesting. Goodbye!', false);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'ExcelTracks.xlsx', 'path': 'ExcelTracks.xlsx'},
    {'name': 'Tracks/AngerTrack.wav', 'path': 'Tracks/AngerTrack.wav'},
    {'name': 'Tracks/SadTrack.wav', 'path': 'Tracks/SadTrack.wav'},
    {'name': 'Tracks/HappyTrack.wav', 'path': 'Tracks/HappyTrack.wav'},
    {'name': 'Tracks/DisgustTrack.wav', 'path': 'Tracks/DisgustTrack.wav'},
    {'name': 'Tracks/FearTrack.wav', 'path': 'Tracks/FearTrack.wav'},
    {'name': 'Tracks/SurpriseTrack.wav', 'path': 'Tracks/SurpriseTrack.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  psychoJS.experiment.save = () => {};
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  //psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  //psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var Welcometxt;
var Welcomekey;
var trialClock;
var Track1;
var Anytext;
var Likert_1Clock;
var Likert1;
var Likert1txt;
var Likert2;
var Likert2txt;
var NextTxt;
var NextRes;
var mouse;
var GoodbyeClock;
var ThankYou;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  Welcometxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcometxt',
    text: 'Welcome, and thank you for your participation in this study!\n\n\nIn this task, you will be presented with 6 short instrumental music clips. Each clip will play for approximately 15 seconds. \n\nAfter listening to each clip, you will be asked to respond to two simple questions regarding your experience of the music. There are no right or wrong answers. We are interested in your personal impressions.\n\n Please press SPACEBAR or TAP to begin with Track 1.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Welcomekey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  Track1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  Track1.setVolume(1.0);
  Track1.isPlaying = false;
  Track1.isFinished = false;
  Anytext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Anytext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Likert_1"
  Likert_1Clock = new util.Clock();
  Likert1 = new visual.Slider({
  win: psychoJS.window, name: 'Likert1',
  startValue: undefined,
  size: [0.7, 0.05], pos: [0, (-0.2)], ori: 0.0, units: psychoJS.window.units,
  labels: ["Happy", "Sad", "Anger", "Fear", "Disgust", "Surprise"], fontSize: 0.025, wrapWidth: 0.1, ticks: [],
  granularity: 1, style: ["RADIO"],
  color: new util.Color([(-1.0), (-1.0), (-1.0)]), 
  markerColor: new util.Color([(-1.0), (-1.0), (-1.0)]), 
  lineColor: new util.Color('White'), 
  opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: 0, 
  flip: false,
});
  
  Likert1txt = new visual.TextStim({
  win: psychoJS.window,
  name: 'Likert1txt',
  text: 'Please indicate which emotion among these \nsix best describes\n the feeling conveyed by the track.',
  font: 'Arial',
  units: undefined, 
  pos: [0, 0.1], draggable: false, 
  height: 0.035,  // smaller text
  wrapWidth: 1.2, // constrain width so text wraps
  ori: 0.0,
  languageStyle: 'LTR',
  color: new util.Color('white'),  
  opacity: undefined,
  depth: -1.0 
});
  
  Likert2 = new visual.Slider({
  win: psychoJS.window, name: 'Likert2',
  startValue: undefined,
  size: [0.9, 0.06], pos: [0, (-0.1)], ori: 0.0, units: psychoJS.window.units,
  labels: ["1", "2", "3", "4", "5"], fontSize: 0.035, ticks: [],
  granularity: 1, style: ["RADIO"],
  color: new util.Color([1.0, 1.0, 1.0]), 
  markerColor: new util.Color([(-1.0), (-1.0), (-1.0)]), 
  lineColor: new util.Color('White'), 
  opacity: 1.0, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
  flip: false,
});

  
  Likert2txt = new visual.TextStim({
  win: psychoJS.window,
  name: 'Likert2txt',
  text: 'Indicate on this scale the intensity of the emotion:',
  font: 'Arial',
  units: undefined, 
  pos: [0, 0.1], draggable: false, 
  height: 0.035,  // smaller
  wrapWidth: 1.2, // text wraps
  ori: 0.0,
  languageStyle: 'LTR',
  color: new util.Color('white'),  
  opacity: 1.0,
  depth: -3.0 
});
  
  NextTxt = new visual.TextStim({
  win: psychoJS.window,
  name: 'NextTxt',
  text: 'Press SPACEBAR or TAP THE SCREEN to proceed. \nUse ESC to abandon the experiment...',
  font: 'Arial',
  units: undefined, 
  pos: [0, 0], draggable: false, 
  height: 0.035,  // smaller
  wrapWidth: 1.2, // wraps so it doesn’t stretch too far
  ori: 0.0,
  languageStyle: 'LTR',
  color: new util.Color('white'),  
  opacity: undefined,
  depth: -4.0 
});
  
  NextRes = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  /////////////////////////////////////////////////////////////////////////////
  // initialize pointer/touch fallback for mobile
  mouse = new core.Mouse({ win: psychoJS.window });
  mouse.clicked = false;
  mouse.clickTime = null;
 /////////////////////////////////////////////////////////////////////////////

  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  ThankYou = new visual.TextStim({
    win: psychoJS.window,
    name: 'ThankYou',
    text: 'Thank you for participating!\nIn this study, we asked an AI model to create each of the individual music pieces you just heard by giving it one single primary emotion each time.\nLet\'s see if AI did a good job in interpreting which musical tune should correspond to which human emotion:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeScreenMaxDurationReached;
var _Welcomekey_allKeys;
var WelcomeScreenMaxDuration;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeScreenClock.reset();
    routineTimer.reset();
    WelcomeScreenMaxDurationReached = false;
    // update component parameters for each repeat
    Welcomekey.keys = undefined;
    Welcomekey.rt = undefined;
    _Welcomekey_allKeys = [];
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    WelcomeScreenMaxDuration = null
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(Welcometxt);
    WelcomeScreenComponents.push(Welcomekey);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;

    // *Welcometxt* updates
    if (t >= 0 && Welcometxt.status === PsychoJS.Status.NOT_STARTED) {
      Welcometxt.tStart = t;
      Welcometxt.frameNStart = frameN;
      Welcometxt.setAutoDraw(true);
    }

    if (Welcometxt.status === PsychoJS.Status.STARTED && Boolean((Welcomekey.keys == 'space'))) {
      Welcometxt.tStop = t;
      Welcometxt.frameNStop = frameN;
      Welcometxt.status = PsychoJS.Status.FINISHED;
      Welcometxt.setAutoDraw(false);
    }

    // *Welcomekey* updates
    if (t >= 0 && Welcomekey.status === PsychoJS.Status.NOT_STARTED) {
      Welcomekey.tStart = t;
      Welcomekey.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { Welcomekey.clock.reset(); });
      psychoJS.window.callOnFlip(function() { Welcomekey.start(); });
      psychoJS.window.callOnFlip(function() { Welcomekey.clearEvents(); });
    }

    if (Welcomekey.status === PsychoJS.Status.STARTED) {
      let theseKeys = Welcomekey.getKeys({keyList: ['space'], waitRelease: false});
      _Welcomekey_allKeys = _Welcomekey_allKeys.concat(theseKeys);
      if (_Welcomekey_allKeys.length > 0) {
        Welcomekey.keys = _Welcomekey_allKeys[_Welcomekey_allKeys.length - 1].name;
        Welcomekey.rt = _Welcomekey_allKeys[_Welcomekey_allKeys.length - 1].rt;
        Welcomekey.duration = _Welcomekey_allKeys[_Welcomekey_allKeys.length - 1].duration;

        // --- AUDIO UNLOCK on key press ---
        if (psychoJS.window.audioContext && psychoJS.window.audioContext.state === 'suspended') {
          await psychoJS.window.audioContext.resume();
          const dummy = psychoJS.window.audioContext.createBufferSource();
          dummy.buffer = psychoJS.window.audioContext.createBuffer(1, 1, 22050);
          dummy.connect(psychoJS.window.audioContext.destination);
          dummy.start();
        }

        continueRoutine = false;
      }

      ///////////////////////////////////////////////////////////////////////////
      // --- MOBILE/TAP FALLBACK ---
      if (typeof mouse !== 'undefined') {
        const now = globalClock.getTime();
        const buttons = mouse.getPressed();  // [left, middle, right]
        if (buttons && buttons[0] === 1) {
          if (!mouse.clickTime || (now - mouse.clickTime) > 0.25) {
            Welcomekey.keys = 'space';
            Welcomekey.rt = Welcomekey.clock ? Welcomekey.clock.getTime() : 0;
            Welcomekey.duration = 0;

            // --- AUDIO UNLOCK on tap ---
            if (psychoJS.window.audioContext && psychoJS.window.audioContext.state === 'suspended') {
              await psychoJS.window.audioContext.resume();
              const dummy = psychoJS.window.audioContext.createBufferSource();
              dummy.buffer = psychoJS.window.audioContext.createBuffer(1, 1, 22050);
              dummy.connect(psychoJS.window.audioContext.destination);
              dummy.start();
            }

            continueRoutine = false;
            mouse.clickTime = now;
          }
        }
      }
      // --- END FALLBACK ---
      ///////////////////////////////////////////////////////////////////////////
    }

    // quit check
    if (psychoJS.experiment.experimentEnded ||
        psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}




function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Welcomekey.corr, level);
    }
    psychoJS.experiment.addData('Welcomekey.keys', Welcomekey.keys);
    if (typeof Welcomekey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Welcomekey.rt', Welcomekey.rt);
        psychoJS.experiment.addData('Welcomekey.duration', Welcomekey.duration);
        routineTimer.reset();
        }
    
    Welcomekey.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ExcelTracks.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(Likert_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(Likert_1RoutineEachFrame());
      trialsLoopScheduler.add(Likert_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var songNumber;
var SongTxt;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    Track1.isFinished = false;
    Track1.setValue(Songs);
    Track1.setVolume(1.0);
    // Run 'Begin Routine' code from code_2
    songNumber = (trials.thisN + 1).toString();
    SongTxt = ("Track " + songNumber);
    
    Anytext.setText(SongTxt);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(Track1);
    trialComponents.push(Anytext);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (Track1.status === STARTED) {
        Track1.isPlaying = true;
        if (t >= (Track1.getDuration() + Track1.tStart)) {
            Track1.isFinished = true;
        }
    }
    // start/stop Track1
    if (t >= 0.1 && Track1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Track1.tStart = t;  // (not accounting for frame time here)
      Track1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Track1.play(); });  // screen flip
      Track1.status = PsychoJS.Status.STARTED;
    }
    if (Track1.status === PsychoJS.Status.STARTED && Boolean(false) || Track1.isFinished) {
      // keep track of stop time/frame for later
      Track1.tStop = t;  // not accounting for scr refresh
      Track1.frameNStop = frameN;  // exact frame index
      // update status
      Track1.status = PsychoJS.Status.FINISHED;
      // stop playback
      Track1.stop();
      // Track1 has finished playback, so force end Routine
      continueRoutine = false;
    }
    
    // *Anytext* updates
    if (((Welcomekey.keys == 'space')) && Anytext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Anytext.tStart = t;  // (not accounting for frame time here)
      Anytext.frameNStart = frameN;  // exact frame index
      
      Anytext.setAutoDraw(true);
    }
    
    
    // if Anytext is active this frame...
    if (Anytext.status === PsychoJS.Status.STARTED) {
    }
    
    if (Anytext.status === PsychoJS.Status.STARTED && Boolean((Track1.status == FINISHED))) {
      // keep track of stop time/frame for later
      Anytext.tStop = t;  // not accounting for scr refresh
      Anytext.frameNStop = frameN;  // exact frame index
      // update status
      Anytext.status = PsychoJS.Status.FINISHED;
      Anytext.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    Track1.stop();  // ensure sound has stopped at end of Routine
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Likert_1MaxDurationReached;
var _NextRes_allKeys;
var Likert_1MaxDuration;
var Likert_1Components;
function Likert_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Likert_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Likert_1Clock.reset();
    routineTimer.reset();
    Likert_1MaxDurationReached = false;
    // update component parameters for each repeat
    Likert1.reset()
    Likert2.reset()
    NextRes.keys = undefined;
    NextRes.rt = undefined;
    _NextRes_allKeys = [];
    psychoJS.experiment.addData('Likert_1.started', globalClock.getTime());
    Likert_1MaxDuration = null
    // keep track of which components have finished
    Likert_1Components = [];
    Likert_1Components.push(Likert1);
    Likert_1Components.push(Likert1txt);
    Likert_1Components.push(Likert2);
    Likert_1Components.push(Likert2txt);
    Likert_1Components.push(NextTxt);
    Likert_1Components.push(NextRes);
    
    for (const thisComponent of Likert_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Likert_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Likert_1' ---
    t = Likert_1Clock.getTime();
    frameN = frameN + 1;

    // *Likert1* updates
    if (t >= 0.0 && Likert1.status === PsychoJS.Status.NOT_STARTED) {
      Likert1.tStart = t;
      Likert1.frameNStart = frameN;
      Likert1.setAutoDraw(true);
    }

    if (Likert1.status === PsychoJS.Status.STARTED && Boolean((Likert1.getRating() != null))) {
      Likert1.tStop = t;
      Likert1.frameNStop = frameN;
      Likert1.status = PsychoJS.Status.FINISHED;
      Likert1.setAutoDraw(false);
    }

    // *Likert1txt* updates
    if (t >= 0.0 && Likert1txt.status === PsychoJS.Status.NOT_STARTED) {
      Likert1txt.tStart = t;
      Likert1txt.frameNStart = frameN;
      Likert1txt.setAutoDraw(true);
    }

    if (Likert1txt.status === PsychoJS.Status.STARTED && Boolean((Likert1.getRating() != null))) {
      Likert1txt.tStop = t;
      Likert1txt.frameNStop = frameN;
      Likert1txt.status = PsychoJS.Status.FINISHED;
      Likert1txt.setAutoDraw(false);
    }

    // *Likert2* updates
    if (((Likert1.getRating() != null)) && Likert2.status === PsychoJS.Status.NOT_STARTED) {
      Likert2.tStart = t;
      Likert2.frameNStart = frameN;
      Likert2.setAutoDraw(true);
    }

    if (Likert2.status === PsychoJS.Status.STARTED && Boolean((Likert2.getRating() != null))) {
      Likert2.tStop = t;
      Likert2.frameNStop = frameN;
      Likert2.status = PsychoJS.Status.FINISHED;
      Likert2.setAutoDraw(false);
    }

    // Check Likert2 for response to end Routine
    if (Likert2.getRating() !== undefined && Likert2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false;
    }

    // *Likert2txt* updates
    if (((Likert1.getRating() != null)) && Likert2txt.status === PsychoJS.Status.NOT_STARTED) {
      Likert2txt.tStart = t;
      Likert2txt.frameNStart = frameN;
      Likert2txt.setAutoDraw(true);
    }

    if (Likert2txt.status === PsychoJS.Status.STARTED && Boolean((Likert2.getRating() != null))) {
      Likert2txt.tStop = t;
      Likert2txt.frameNStop = frameN;
      Likert2txt.status = PsychoJS.Status.FINISHED;
      Likert2txt.setAutoDraw(false);
    }

    // *NextTxt* updates
    if (((Likert2.getRating() != null)) && NextTxt.status === PsychoJS.Status.NOT_STARTED) {
      NextTxt.tStart = t;
      NextTxt.frameNStart = frameN;
      NextTxt.setAutoDraw(true);
    }

    if (NextTxt.status === PsychoJS.Status.STARTED && Boolean((NextRes.keys == 'space'))) {
      NextTxt.tStop = t;
      NextTxt.frameNStop = frameN;
      NextTxt.status = PsychoJS.Status.FINISHED;
      NextTxt.setAutoDraw(false);
    }

    // *NextRes* updates
    if (((Likert2.getRating() != null)) && NextRes.status === PsychoJS.Status.NOT_STARTED) {
      NextRes.tStart = t;
      NextRes.frameNStart = frameN;

      psychoJS.window.callOnFlip(function() { NextRes.clock.reset(); });
      psychoJS.window.callOnFlip(function() { NextRes.start(); });
      psychoJS.window.callOnFlip(function() { NextRes.clearEvents(); });
    }

    if (NextRes.status === PsychoJS.Status.STARTED) {
      let theseKeys = NextRes.getKeys({keyList: ['space'], waitRelease: false});
      _NextRes_allKeys = _NextRes_allKeys.concat(theseKeys);
      if (_NextRes_allKeys.length > 0) {
        NextRes.keys = _NextRes_allKeys[_NextRes_allKeys.length - 1].name;
        NextRes.rt = _NextRes_allKeys[_NextRes_allKeys.length - 1].rt;
        NextRes.duration = _NextRes_allKeys[_NextRes_allKeys.length - 1].duration;

        // --- AUDIO UNLOCK on key press ---
        if (psychoJS.window.audioContext && psychoJS.window.audioContext.state === 'suspended') {
          await psychoJS.window.audioContext.resume();
          const dummy = psychoJS.window.audioContext.createBufferSource();
          dummy.buffer = psychoJS.window.audioContext.createBuffer(1, 1, 22050);
          dummy.connect(psychoJS.window.audioContext.destination);
          dummy.start();
        }

        continueRoutine = false;
      }

      ///////////////////////////////////////////////////////////////////////////
      // --- MOBILE/TAP FALLBACK ---
      if (typeof mouse !== 'undefined') {
        const now = globalClock.getTime();
        const buttons = mouse.getPressed();  // [left, middle, right]
        if (buttons && buttons[0] === 1) {
          if (!mouse.clickTime || (now - mouse.clickTime) > 0.25) {
            NextRes.keys = 'space';
            NextRes.rt = NextRes.clock ? NextRes.clock.getTime() : 0;
            NextRes.duration = 0;

            // --- AUDIO UNLOCK on tap ---
            if (psychoJS.window.audioContext && psychoJS.window.audioContext.state === 'suspended') {
              await psychoJS.window.audioContext.resume();
              const dummy = psychoJS.window.audioContext.createBufferSource();
              dummy.buffer = psychoJS.window.audioContext.createBuffer(1, 1, 22050);
              dummy.connect(psychoJS.window.audioContext.destination);
              dummy.start();
            }

            continueRoutine = false;
            mouse.clickTime = now;
          }
        }
      }
      // --- END FALLBACK ---
      ///////////////////////////////////////////////////////////////////////////
    }

    // quit check
    if (psychoJS.experiment.experimentEnded ||
        psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;
    for (const thisComponent of Likert_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}



function Likert_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Likert_1' ---
    for (const thisComponent of Likert_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Likert_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Likert1.response', Likert1.getRating());
    psychoJS.experiment.addData('Likert1.rt', Likert1.getRT());
    psychoJS.experiment.addData('Likert2.response', Likert2.getRating());
    psychoJS.experiment.addData('Likert2.rt', Likert2.getRT());

/////////////////////////////////////////////////////////////////////////////////////////////////
    // NEW: parse correct emotion from filename
    let filePath = Songs;  // comes from Excel column
    let correctEmotion = filePath.split('/')[1].replace('Track.wav', '');

    // Participant’s chosen emotion
    let chosenEmotion = Likert1.getRating();

    // Check correctness
    let isCorrect = (chosenEmotion === correctEmotion) ? 1 : 0;

    // Save extra fields
    psychoJS.experiment.addData('songFile', filePath);
    psychoJS.experiment.addData('correctEmotion', correctEmotion);
    psychoJS.experiment.addData('isCorrect', isCorrect);

    // Maintain breakdown
    if (!psychoJS.experiment.extraInfo.correctByEmotion) {
      psychoJS.experiment.extraInfo.correctByEmotion = {};
    }
    if (!(correctEmotion in psychoJS.experiment.extraInfo.correctByEmotion)) {
      psychoJS.experiment.extraInfo.correctByEmotion[correctEmotion] = { correct: 0, total: 0 };
    }
    psychoJS.experiment.extraInfo.correctByEmotion[correctEmotion].total += 1;
    psychoJS.experiment.extraInfo.correctByEmotion[correctEmotion].correct += isCorrect;
/////////////////////////////////////////////////////////////////////////////////////////////////////

    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(NextRes.corr, level);
    }
    psychoJS.experiment.addData('NextRes.keys', NextRes.keys);
    if (typeof NextRes.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('NextRes.rt', NextRes.rt);
        psychoJS.experiment.addData('NextRes.duration', NextRes.duration);
        routineTimer.reset();
        }
    
    NextRes.stop();
    // the Routine "Likert_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeMaxDurationReached;
var GoodbyeMaxDuration;
var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    GoodbyeClock.reset(routineTimer.getTime());
    routineTimer.add(1800.000000);
    GoodbyeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    GoodbyeMaxDuration = null

    //////////////////////////////////////////////////////////////////////////////////
    // === DYNAMIC FEEDBACK TEXT (inserted) ===
    try {
      const breakdown = psychoJS.experiment.extraInfo.correctByEmotion || {};
      let totalCorrect = 0;
      let totalTrials = 0;
      for (const emo in breakdown) {
        totalCorrect += (breakdown[emo]?.correct || 0);
        totalTrials += (breakdown[emo]?.total || 0);
      }

      const lines = [];
      lines.push("Thank you for participating!\nIn this study, we asked an AI model to create each of the individual music pieces\n you just heard by giving it one single primary emotion as prompt each time.\nLet\'s see if AI did a good job in interpreting \nwhich musical tune should correspond to which human emotion:");
      lines.push("");

      if (totalTrials > 0) {
        lines.push(`Overall: ${totalCorrect} out of ${totalTrials} emotions matched.`);
        lines.push("");
        lines.push("Breakdown by emotion:");

        // show in a stable order first, then any extras (just in case)
        const preferredOrder = ["Happy","Sad","Anger","Fear","Disgust","Surprise"];
        const shown = new Set();
        for (const emo of preferredOrder) {
          if (breakdown[emo]) {
            lines.push(`${emo}: ${breakdown[emo].correct} / ${breakdown[emo].total}`);
            shown.add(emo);
          }
        }
        for (const emo in breakdown) {
          if (!shown.has(emo)) {
            lines.push(`${emo}: ${breakdown[emo].correct} / ${breakdown[emo].total}`);
          }
        }

        lines.push("");
        if (totalCorrect === totalTrials) {
          lines.push("🎉 Perfect score! Based on your responses, looks like \nAI\'s understanding of music perfectly aligns with the correlation of human emotion and embodied music cognition!");
        } else if (totalCorrect > totalTrials / 2) {
          lines.push("👍 Good effort! Based on your responses, more than \nhalf of the time AI\'s music-understanding aligns perfectly with the correlation of human emotion and embodied music cognition!");
        } else {
          lines.push("💡 Based on your responses, looks like AI\'s music understanding alignment is non-ideal for \nthe correlation of human emotion and embodied music cognition!");
        }
      } else {
        // fallback if nothing recorded
        lines.push("Your results will appear here once trials are completed.");
      }

      ThankYou.setText(lines.join("\n"));
      ThankYou.setHeight(0.03);        // make text smaller
      ThankYou.wrapWidth = 1.2;     
      ThankYou.setLineSpacing(1.1);
    } catch (e) {
      console.log("Feedback text build failed:", e);
      // If anything goes wrong, keep whatever text ThankYou already had
    }
    // === END INSERT ===
    /////////////////////////////////////////////////////////////////////////////////

    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(ThankYou);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ThankYou* updates
    if (t >= 0 && ThankYou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ThankYou.tStart = t;  // (not accounting for frame time here)
      ThankYou.frameNStart = frameN;  // exact frame index
      
      ThankYou.setAutoDraw(true);
    }
    
    
    // if ThankYou is active this frame...
    if (ThankYou.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ThankYou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ThankYou.tStop = t;  // not accounting for scr refresh
      ThankYou.frameNStop = frameN;  // exact frame index
      // update status
      ThankYou.status = PsychoJS.Status.FINISHED;
      ThankYou.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (GoodbyeMaxDurationReached) {
        GoodbyeClock.add(GoodbyeMaxDuration);
    } else {
        GoodbyeClock.add(1800.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  saveData(psychoJS.experiment._trialsData);
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
