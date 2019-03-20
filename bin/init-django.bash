#!/bin/bash

if [ "$MODE" = "production" ]; then
  bash ./bin/compile_sass.bash
fi

cd app || exit
python manage.py migrate
python manage.py collectstatic --noinput -i other
cd .. || exit
