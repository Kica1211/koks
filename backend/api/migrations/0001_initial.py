# Generated by Django 3.1.1 on 2021-01-26 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('description', models.TextField(max_length=300)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('author', models.TextField(max_length=50)),
            ],
        ),
    ]
