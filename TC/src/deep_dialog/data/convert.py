import json
import cPickle as pickle

kbs = ['movie_kb.1k.json' , 'movie_kb.1k.p' , 'movie_kb.v2.json' , 'movie_kb.v2.p']

for kb in kbs:
    with open(kb, 'rb') as f:
        data = pickle.load(f)
    print data
    with open(kb+'.json', 'w') as f:
        json.dump(data, f)

goals = ['user_goals_first_turn_template.part.movie.v1.p']

for goal in goals:
    with open(goal, 'rb') as f:
        data = pickle.load(f)
    print data
    with open(goal+'.json', 'w') as f:
        json.dump(data, f)
