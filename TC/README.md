# End-to-End Task-Completion Neural Dialogue Systems
*An implementation of the  
[End-to-End Task-Completion Neural Dialogue Systems](http://arxiv.org/abs/1703.01008) and
[A User Simulator for Task-Completion Dialogues](http://arxiv.org/abs/1612.05688).*

This document describes how to run the simulation and different dialogue agents (rule-based, command line, reinforcement learning). More instructions to plug in your customized agents or user simulators are in the Recipe section of the paper.

## Content
* [Data](#data)
* [Parameter](#parameter)
* [Running Dialogue Agents](#running-dialogue-agents)
* [Evaluation](#evaluation)
* [Reference](#reference)

## Data
all the data is under this folder: ./src/deep_dialog/data

* Movie Knowledge Bases<br/>
`movie_kb.1k.p` --- 94% success rate (for `user_goals_first_turn_template_subsets.v1.p`)<br/>
`movie_kb.v2.p` --- 36% success rate (for `user_goals_first_turn_template_subsets.v1.p`)

* User Goals<br/>
`user_goals_first_turn_template.v2.p` --- user goals extracted from the first user turn<br/>
`user_goals_first_turn_template.part.movie.v1.p` --- a subset of user goals [Please use this one, the upper bound success rate on movie_kb.1k.json is 0.9765.]

* NLG Rule Template<br/>
`dia_act_nl_pairs.v6.json` --- some predefined NLG rule templates for both User simulator and Agent.

* Dialog Act Intent<br/>
`dia_acts.txt`

* Dialog Act Slot<br/>
`slot_set.txt`

## Parameter

### Basic setting

`--agt`: the agent id<br/>
`--usr`: the user (simulator) id<br/>
`--max_turn`: maximum turns<br/>
`--episodes`: how many dialogues to run<br/>
`--slot_err_prob`: slot level err probability<br/>
`--slot_err_mode`: which kind of slot err mode<br/>
`--intent_err_prob`: intent level err probability


### Data setting
