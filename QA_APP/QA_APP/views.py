from django.shortcuts import render, render_to_response

# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from .models import QuestionAnswerPair
from .test import search_query

def index(request):
    # 非正经闲聊机器人，可以聊聊一部分问题，极有可能说的不对，因为大多数时候都听不懂你在说什么。

    return render_to_response("index.html")


@csrf_exempt
def response(request):
    question = request.POST['question']
    answer=search_query(question)
    pair = []
    qapair = QuestionAnswerPair(question, answer)
    pair.append(qapair)
    print(pair)
    return render(request, "index.html", {'pair': pair})
