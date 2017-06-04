import cPickle as pickle
import jsonpickle

goal_file_path = "goals.json"

with open(goal_file_path, 'rb') as f:
    data = ' '.join(f.readlines())
    thawed = jsonpickle.decode(data)

print thawed

with open(goal_file_path + ".p", 'wb') as f:
    pickle.dump(thawed, f)

