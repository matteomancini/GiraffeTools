"""giraffe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin

import giraffe.views
import porcupine.views
from api.urls import api_urls

app_name = "app"

urlpatterns = [
    # api calls
    url(r"^api/", include(api_urls)),

    # porcupine calls
    url(r"^porcupine/?", porcupine.views.porcupine, name="porcupine"),
    # Make sure everything from the react router is used.
    # url(r"^porcupine/^(?:.*)/?$?", porcupine.views.porcupine, name="porcupine"),

    # giraffe calls
    url(r"^$", giraffe.views.index, name="index"),
    # Make sure everything from the react router is used.
    url(r"^(?:.*)/?$", giraffe.views.index, name="index"),



    # Admin
    url(r"^admin/?", admin.site.urls),
    # Slack
    url(r"^slack/$", giraffe.views.slack, name="slack"),
    url(r"^slack/thanks$", giraffe.views.slack_thanks, name="slack_thanks"),
    # Github Integration
    path("_github/", include("github.urls", namespace="github")),
    # Project
    # path("gh/<slug:ghuser>/",
    #      giraffe.views.user, name="user"),
    # path("gh/<slug:ghuser>/<slug:ghrepo>/",
    #      giraffe.views.project, name="repo"),
    # path("gh/<slug:ghuser>/<slug:ghrepo>/<slug:ghbranch>/",
    #      giraffe.views.project, name="branch"),
    # path("gh/<slug:ghuser>/<slug:ghrepo>/<slug:ghbranch>/<slug:toolName>",
    #      giraffe.views.projectTool, name="projectTool"),
]
