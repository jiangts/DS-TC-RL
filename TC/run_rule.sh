python run.py --agt 5 --usr 1 --max_turn 40\
          --episodes 150\
                  --movie_kb_path ./deep_dialog/data/movie_kb.1k.p\
                          --goal_file_path ./deep_dialog/data/user_goals_first_turn_template.part.movie.v1.p\
                                  --intent_err_prob 0.00\
                                          --slot_err_prob 0.00\
                                                  --episodes 500\
                                                          --act_level 0\
