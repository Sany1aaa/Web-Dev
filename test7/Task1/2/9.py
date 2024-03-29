from collections import defaultdict

def count_occurrences(n, words):
    word_count = defaultdict(int)
    distinct_words = []
    
    for word in words:
        if word not in word_count:
            distinct_words.append(word)
        word_count[word] += 1
    
    print(len(distinct_words))
    print(*[word_count[word] for word in distinct_words])

if __name__ == "__main__":
    n = int(input())
    words = [input().strip() for _ in range(n)]
    count_occurrences(n, words)

# word order